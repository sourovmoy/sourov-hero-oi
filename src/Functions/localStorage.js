import { toast } from "react-toastify";

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

const addApps = (state) => {
  const getAllApps = getApps();
  const alreadyExists = getAllApps.some((item) => item.id === state.id);
  if (alreadyExists) {
    toast("Already Installed");
    return;
  } else {
    getAllApps.push(state);
    setItemString(getAllApps);
  }
};
const removeApps = (id) => {
  const apps = getApps();
  const filterApp = apps.filter((app) => app.id !== id);
  setItemString(filterApp);
};

export { getApps, addApps, removeApps };
