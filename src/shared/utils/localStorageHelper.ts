const getItemLocalStorage = (lsKey = "appSearch"): string | undefined => {
  if (!localStorage) return;

  const lsValue: string | null = localStorage.getItem(lsKey);
  if (!lsValue) return;

  try {
    const res = JSON.parse(lsValue);
    if (res) return res;
  } catch (error) {
    console.error("failed to read from the local store", error);
  }
};

const setItemLocalStorage = (value: string, lsKey = "appSearch") => {
  if (!localStorage) return;

  try {
    const lsValue = JSON.stringify(value);
    localStorage.setItem(lsKey, lsValue);
  } catch (error) {
    console.error("failed to write to the local store", error);
  }
};
export const localS = {
  get: getItemLocalStorage,
  set: setItemLocalStorage,
};
