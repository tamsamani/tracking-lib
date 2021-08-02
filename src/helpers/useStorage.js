import Cookies from "js-cookie";

export const STORAGE_KEY = "__tf_storage__";

function applyOnSelectedStorage(self, act, ...args) {
  const storageType = self.type;
  const storage = self.storage;
  const isCookie = storageType === "cookie";

  if (act === "json") {
    if (isCookie) return storage.getJSON(...args);
    else {
      const json = storage.getItem(STORAGE_KEY);
      return JSON.parse(json);
    }
  }

  // const data = self.data;
  const [key, value] = args;

  switch (act) {
    case "get":
      return isCookie ? storage.get(...args) : self.data[key];
    case "set":
      if (isCookie) return storage.set(...args);
      else {
        self.data[key] = value;
        const json = JSON.stringify(self.data);
        storage.setItem(STORAGE_KEY, json);
      }
      break;

    case "remove":
      if (isCookie) return storage.remove(...args);
      else {
        delete self.data[key];
        const json = JSON.stringify(self.data);
        storage.setItem(STORAGE_KEY, json);
      }
      break;

    case "clear":
      self._data = {};
      if (!isCookie) storage.removeItem(STORAGE_KEY);
      break;
  }

  return null;
}

export default function useStorage(type, defaultsData = {}) {
  const storageObject = {
    type,
    defaultsData,
    get data() {
      if (this._data)
        this._data = Object.assign(
          { ...this.defaultsData },
          applyOnSelectedStorage(this, "json")
        );
      return this._data;
    },
    get storage() {
      const storage =
        this.type === strageTypes.cookie ? Cookies : window[storageType];
      if (!storage) throw new Error("Storage not supported on this browser.");
      return storage;
    },
    get: function (key) {
      return applyOnSelectedStorage(this, "get", key);
    },
  };

  return storageObject;
}
