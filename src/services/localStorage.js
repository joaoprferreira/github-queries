const saveInLocalStorage = ( key, value ) => {
  const valueInStrting = JSON.stringify(value);
  localStorage.setItem( key, valueInStrting);
};

const getValueFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  const valueInObj = JSON.parse(value);
  return valueInObj;
};

export { getValueFromLocalStorage, saveInLocalStorage };
