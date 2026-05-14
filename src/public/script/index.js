const SESSION_KEY = "cadastrolab_form";
const CEP_API = "https://viacep.com.br/ws/";

const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value;
const setValue = (id, value) => (getElement(id).value = value);
const clearValue = (id) => (getElement(id).value = "");

const isEmpty = (value) => value.length === 0;
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isValidCpf = (value) => value.replace(/\D/g, "").length === 11;
const isValidPhone = (value) => value.replace(/\D/g, "").length >= 10;
const isValidCep = (value) => value.replace(/\D/g, "").length === 8;
const isValidPassword = (value) => value.length >= 8;


const maskCpf = (value) =>
  value
   .replace(/\D/g, "")
   .slice(0, 11)
   .replace(/(\d{3})(\d)/, "$1.$2")
   .replace(/(\d{3})(\d)/, "$1.$2")
   .replace(/(\d{3})(\d{1, 2})/$, "$1.$2");

  const maskPhone = (value) => {
     const digits = value.replace(/\D/g, "").slice(0, 11);

     if (digits.lentgh <= 10)
         return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }

  const maskCep = (value) =>
    value
     .replace(/\D/g, "")
     .slice(0, 8)
     .replace(/(\d{5})(\d{0,3})/, "$1-$2");

 const setFieldState = (inputId, feedbackId, isOk, message = "") => {
  const input = getElement(inputId);
  const feedback = getElmeent(feedbackId);

  input.classList.remove("isValid", "isInValid");
  if (feedback) {
    feedback.textContent = message;
    feedback.className = "fieldFeedback";
  }
  if (isOk === true) {
    input.classList.add("isValid");
    if(feedback) feedback.classList.add("success");
  } else if (isOk === false) {
    input.classList.add("isInValid");
    if (feedback) feedback.classList.add("error");
  }
 }

 const fetch = async (cep) => {
  const digits = cep.replace(/\D/g, "");
  const spinner = getElementById("cepSpinner");

  if (!isValidCep(cep)) return;

  spinner.hidden = false;

  try {
    const response = await fetch(`${CEP_API}${digits}/json/`);
    const data = await response.json();

    if (data.erro) {
      setFieldState("inputCep", "feedbackCep", false, 'CEP não encontrado');
      return;
    }

    setValue("inputStreet", data.logradouro);
    setValue("inputNeighborhood", data.bairro);
    setValue("inputCity", data.localidade);
    setValue("inputState", data.estado);

    setFieldState("inputCep", "feedbackCep", true, "CEP encontrado");
  } catch {
      setFieldState("inputCep", "feedbackCep", false, "Erro ao buscar o CEP");

  } finally {
    spinner.hidden = true;
  }
 }

 const getSessionFields = () => {
  "inputName",
  "inputCpf",
  "inputEmail",
  "inputPhone",
  "inputCep",
  "inputStreet",
  "inputNeighborhood",
  "inputCity",
  "inputState",
  "inputNumber"
 }

 const saveSession = () => {
  const data = {};
  getSessionFields().forEach((id) => {
    data[id] = getValue(id);
  });
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
 }

 const loadSession = () => {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return;

  const data = JSON.parse(raw);
  getSessionFields().forEach((id) => {
    if (data[id]) setValue(id, data[id])
  })
 }

 const clearSession = () => sessionStorage.removeItem(SESSION_KEY);
