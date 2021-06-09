export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getData = (key) => {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch (err) {
      return undefined;
    }
  };
  