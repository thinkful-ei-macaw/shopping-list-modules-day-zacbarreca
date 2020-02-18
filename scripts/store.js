import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = (id) => {
  return items.find(element => element.id === id);
};

const addItem = (name) => {
  try {
    item.validateName(name);
  } catch (error) {
    console.error(`Cannot add item: ${error.message}!`)
    return
  }
  items.push(item.create(name));
};

const findAndToggleChecked = (id) => {
  let foundItem = findById(id);
  foundItem.checked = !foundItem.checked;
};

const findAndUpdateName = (id, newName) => {
  try {
    item.validateName(newName);
  } catch (error) {
    console.error(`Cannot update name: ${error.message}!`)
  }
};

const findAndDelete = (id) => {
  let index = items.findIndex(element => element.id === id);
  items.splice(index, 1);
};

const toggleCheckedFilter = () => {
  hideCheckedItems.toggle()
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};