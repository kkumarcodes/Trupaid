import moment from "moment";

export function isRequired(value, enable = true) {
  if (!enable) return true;
  return value != null && value.trim().length > 0;
}

export function isPhoneNumber(value, enable = true) {
  if (!enable) return true;
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(value);
}

export function isZipcode(value, enable = true) {
  if (!enable) return true;
  var re = /^[0-9]{5}$/;
  return re.test(value);
}

export function isCRD(value, enable = true) {
  if (!enable) return true;
  var re = /^[0-9]{2,7}$/;
  return re.test(value);
}

export function isText(value) {
  return value ? /^[A-Za-z ]+$/.test(value) : true;
}

export function isValidDate(value) {
  var regex = /(0[1-9]|1[0-2])\/(((0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/;
  return value ? regex.test(value) : true;
}

export function isValidSSN(value) {
  var regex = /\d{3}[\-]\d{2}[\-]\d{4}$/;
  return value ? regex.test(value) : true;
}

export function isValidEIN(value) {
  var regex = /\d{2}[\-]\d{7}$/;
  return value ? regex.test(value) : true;
}

export function isValidSSN_EIN(value) {
  var regex = /(^\d{9})|(^\d{3}-\d{2}-\d{4}$)|(^[1-9]\d?-\d{7}$)/;
  return value ? regex.test(value) : true;
}

export function isSame(value1, value2) {
  return value1 === value2;
}

export function isValidEmail(value, enable = true) {
  if (!enable) return true;
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value ? regex.test(value) : true;
}

export function validatePassword(value) {
  if (value === "") {
    return "This field is required";
  }

  //minimum password length validation
  if (value.length < 8) {
    return "This field has a minimum length of 8 characters.";
  }

  //maximum length of password validation
  if (value.length > 20) {
    return "Password length must not exceed 20 characters";
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    return "This field must have an uppercase letter.";
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    return "This field must have a lowercase letter.";
  }

  const isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(value)) {
    return "This field must have a special character (such as !@#$%^&*).";
  }

  return null;
}
