export const getSelectedItem = selectedMainItem => {
  if (!selectedMainItem) return;
  if (selectedMainItem.a5?.length) {
    return getSelectedItem(selectedMainItem.a5[0]);
  }
  return {
    ...selectedMainItem,
    a6: JSON.parse(selectedMainItem.a6),
  };
};
