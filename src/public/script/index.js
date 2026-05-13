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
