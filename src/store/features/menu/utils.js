// Hard code - a5
export const getSelectedItem = selectedMainItem => {
  if (selectedMainItem?.a5?.length) {
    return getSelectedItem(selectedMainItem.a5[0]);
  }
  return selectedMainItem;
};
