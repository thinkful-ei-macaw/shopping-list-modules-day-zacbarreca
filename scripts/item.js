const validateName = (name) => {
  if (!name) {
    throw TypeError("Name must not be blank");
  }
}

const create = (name) => {
  return {
    id: cuid(),
    name: name,
    checked: false
  }
}

export default {
  validateName,
  create
};