import jsoning from "jsoning";
const database = new jsoning("./db.json");

export default {
  set: (key, val) => {
    return database.set(key, val);
  },
  push: (array, val) => {
    return database.push(array, val);
  },
  get: (key) => {
    return database.get(key);
  },
  clear: () => {
    return database.clear();
  },
};
