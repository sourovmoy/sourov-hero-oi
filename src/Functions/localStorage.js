const getApps = () => {
  const getAppString = localStorage.getItem("apps");
  if (getAppString) {
    const parseGetApps = JSON.parse(getAppString);
    return parseGetApps;
  }
  return [];
};

const setItemString = (apps) => {
  const appsString = JSON.stringify(apps);
  localStorage.setItem("apps", appsString);
};

const addApps = (id) => {
  const getAllApps = getApps();
  const newCart = [...getAllApps, id];

  setItemString(newCart);
};
const removeApps = (id) => {
  const apps = getApps();
  const filterApp = apps.filter((app) => app.id !== id);
  setItemString(filterApp);
};

export { getApps, addApps, removeApps };
