const mongoose = require("mongoose");

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length > 0) return true;
  return false;
};

// VALIDATION USING REGEX

//____________________valid password____________________//

const isValidPassword = function (password) {
  password = password.trim();
  if (password.length < 8 || password.length > 15) {
    return false;
  }
  return true;
};
//____________________email regex____________________//

const isVAlidEmail = function (email) {
  return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);
};

//____________________phone regex____________________//

const isValidPhone = function (phone) {
  return /^[6789]\d{9}$/.test(phone);
};

//____________________pincode____________________//

const isValidPincode = function (pincode) {
  return /^[1-9][0-9]{5}$/.test(pincode);
};

//____________________valid body____________________//
const isValidBody = function (x) {
  return Object.keys(x).length > 0;
};

//____________________valid name____________________//
const isValidName = function (name) {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
};

//____________________valid object ID____________________//
const isValidObjectId = function (ObjectId) {
  return mongoose.Types.ObjectId.isValid(ObjectId);
};

//_____________________valid number___________________//
const isValidPrice = function (price) {
  return /^\d+(\.\d{1,2})?$/.test(price);
};

//___________________valid size______________________//
function isValidSize(size) {
  return ["S", "XS", "M", "X", "L", "XXL", "XL"].indexOf(size) !== -1;
}

//__________________valid status___________________//

function isValidStatus(status) {
  return ["pending", "completed", "cancelled"].indexOf(status) !== -1;
}

module.exports = {
  isValidPassword,
  isVAlidEmail,
  isValidPhone,
  isValid,
  isValidPincode,
  isValidBody,
  isValidName,
  isValidObjectId,
  isValidPrice,
  isValidSize,
  isValidStatus,
};
