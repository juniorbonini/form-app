const SESSION_KEY = "cadastrolab_form";
const CEP_API = "https://viacep.com.br/ws/";

const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value.trim();
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
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

const maskPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }

  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
};

const maskCep = (value) =>
  value
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d{0,3})/, "$1-$2");

const setFieldState = (inputId, feedbackId, isOk, message = "") => {
  const input = getElement(inputId);
  const feedback = getElement(feedbackId);

  input.classList.remove("isValid", "isInvalid");

  if (feedback) {
    feedback.textContent = message;
    feedback.className = "fieldFeedback";
  }

  if (isOk === true) {
    input.classList.add("isValid");

    if (feedback) {
      feedback.classList.add("success");
    }
  } else if (isOk === false) {
    input.classList.add("isInvalid");

    if (feedback) {
      feedback.classList.add("error");
    }
  }
};

const fetchCep = async (cep) => {
  const digits = cep.replace(/\D/g, "");
  const spinner = getElement("cepSpinner");

  if (!isValidCep(cep)) return;

  spinner.hidden = false;

  try {
    const response = await fetch(`${CEP_API}${digits}/json/`);
    const data = await response.json();

    if (data.erro) {
      setFieldState("inputCep", "feedbackCep", false, "CEP não encontrado");

      return;
    }

    setValue("inputStreet", data.logradouro);
    setValue("inputNeighborhood", data.bairro);
    setValue("inputCity", data.localidade);
    setValue("inputState", data.uf);

    setFieldState("inputCep", "feedbackCep", true, "CEP encontrado");

    saveSession();
  } catch {
    setFieldState("inputCep", "feedbackCep", false, "Erro ao buscar CEP");
  } finally {
    spinner.hidden = true;
  }
};

const openModal = (message) => {
  getElement("modalMessage").textContent = message;
  getElement("successModal").classList.remove("hidden");
};

const closeModal = () => {
  getElement("successModal").classList.add("hidden");
};

const getSessionFields = () => [
  "inputName",
  "inputCpf",
  "inputEmail",
  "inputPhone",
  "inputCep",
  "inputStreet",
  "inputNeighborhood",
  "inputCity",
  "inputState",
  "inputNumber",
  "inputPassword",
  "inputConfirmPassword",
];

const saveSession = () => {
  const data = {};

  getSessionFields().forEach((id) => {
    data[id] = getValue(id);
  });

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
};

const loadSession = () => {
  const raw = sessionStorage.getItem(SESSION_KEY);

  if (!raw) return;

  const data = JSON.parse(raw);

  getSessionFields().forEach((id) => {
    if (data[id]) {
      setValue(id, data[id]);
    }
  });

  validator.validateAll();
};

const clearSession = () => {
  sessionStorage.removeItem(SESSION_KEY);
};

class FormValidator {
  constructor(fields) {
    this.fields = fields;
    this.scores = {};

    this.fields.forEach((field) => {
      this.scores[field.inputId] = false;
    });
  }

  validate(inputId) {
    const field = this.fields.find((field) => field.inputId === inputId);

    if (!field) return;

    const value = getValue(inputId);

    const isOk = !isEmpty(value) && field.validator(value);

    const message = isOk
      ? field.successMessage
      : isEmpty(value)
        ? ""
        : field.errorMessage;

    this.scores[inputId] = isOk;
    setFieldState(
      inputId,
      field.feedbackId,
      isEmpty(value) ? null : isOk,
      message,
    );
    this.updateProgress();
    this.updateSubmitBtn();
  }

  validateAll() {
    this.fields.forEach((field) => {
      this.validate(field.inputId);
    });
  }

  getScore() {
    const total = this.fields.length;

    const valid = Object.values(this.scores).filter(Boolean).length;

    return Math.round((valid / total) * 100);
  }

  updateProgress() {
    const score = this.getScore();

    getElement("progressFill").style.width = `${score}%`;

    getElement("progressValue").textContent = `${score}%`;
  }

  updateSubmitBtn() {
    getElement("btn").disabled = this.getScore() < 100;
  }
}

const validator = new FormValidator([
  {
    inputId: "inputName",
    feedbackId: "feedbackName",
    validator: (value) => value.length >= 3,
    successMessage: "Nome válido",
    errorMessage: "Informe o nome completo",
  },

  {
    inputId: "inputCpf",
    feedbackId: "feedbackCpf",
    validator: isValidCpf,
    successMessage: "CPF válido",
    errorMessage: "CPF inválido",
  },

  {
    inputId: "inputEmail",
    feedbackId: "feedbackEmail",
    validator: isValidEmail,
    successMessage: "E-mail válido",
    errorMessage: "E-mail inválido",
  },

  {
    inputId: "inputPhone",
    feedbackId: "feedbackPhone",
    validator: isValidPhone,
    successMessage: "Telefone válido",
    errorMessage: "Telefone inválido",
  },

  {
    inputId: "inputCep",
    feedbackId: "feedbackCep",
    validator: isValidCep,
    successMessage: "CEP válido",
    errorMessage: "CEP inválido",
  },

  {
    inputId: "inputNumber",
    feedbackId: "feedbackNumber",
    validator: (value) => value.length >= 1,
    successMessage: "",
    errorMessage: "Informe o número",
  },

  {
    inputId: "inputPassword",
    feedbackId: "feedbackPassword",
    validator: isValidPassword,
    successMessage: "Senha válida",
    errorMessage: "Mínimo 8 caracteres",
  },

  {
    inputId: "inputConfirmPassword",
    feedbackId: "feedbackConfirmPassword",
    validator: (value) => value === getValue("inputPassword"),

    successMessage: "Senhas conferem",
    errorMessage: "As senhas não conferem",
  },
]);

getElement("inputCpf").addEventListener("input", (e) => {
  e.target.value = maskCpf(e.target.value);

  validator.validate("inputCpf");

  saveSession();
});

getElement("inputPhone").addEventListener("input", (e) => {
  e.target.value = maskPhone(e.target.value);

  validator.validate("inputPhone");

  saveSession();
});

getElement("inputCep").addEventListener("input", (e) => {
  e.target.value = maskCep(e.target.value);

  validator.validate("inputCep");

  saveSession();

  if (isValidCep(e.target.value)) {
    fetchCep(e.target.value);
  }
});

const textFields = [
  "inputName",
  "inputEmail",
  "inputNumber",
  "inputPassword",
  "inputConfirmPassword",
];

textFields.forEach((id) => {
  getElement(id).addEventListener("input", () => {
    validator.validate(id);

    saveSession();
  });
});

getElement("clearBtn").addEventListener("click", () => {
  getElement("registerForm").reset();

  clearSession();

  [...getElement("registerForm").querySelectorAll(".fieldInput")].forEach(
    (element) => {
      element.classList.remove("isValid", "isInvalid");
    },
  );

  [...getElement("registerForm").querySelectorAll(".fieldFeedback")].forEach(
    (element) => {
      element.textContent = "";
      element.className = "fieldFeedback";
    },
  );

  Object.keys(validator.scores).forEach((key) => {
    validator.scores[key] = false;
  });

  validator.updateProgress();
  validator.updateSubmitBtn();
});

getElement("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  alert(`Cadastro realizado com sucesso!\nBem-vindo ${getValue("inputName")}.`);

  clearSession();

  [...getElement("registerForm").querySelectorAll(".fieldFeedback")].forEach(
    (element) => {
      element.textContent = "";
      element.className = "fieldFeedback";
    },
  );

  getElement("registerForm").reset();
});

loadSession();
