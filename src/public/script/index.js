const SESSION_KEY = "cadastrolab_form";
const CEP_API = "https://viacep.com.br/ws/";

const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value;
const setValue = (id, value) => (getElement(id).value = value);
const clearValue = (id) => (getElement(id).value = "");
