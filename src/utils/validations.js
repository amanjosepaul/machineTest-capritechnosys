const checkIsRequired = (key, title, formData) => {
  if (formData[key].length < 1) {
    return `${title} is required`;
  }

  return "";
};

function validateInput(item) {
  const { key, formData } = item;
  switch (key) {
    case "email": {
      return formData[key].match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
        ? ""
        : "Please enter valid Email";
    }

    case "password": {
      return checkIsRequired(key, "Password", formData);
    }

    default: {
      break;
    }
  }
}

export default validateInput;
