const getUser = () => {
    const existingUser = localStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        localStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataId = () => {
    const userId = getUser();
    return `red-onion/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataId = getDataId();
    const data = localStorage.getItem(dataId) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (id, count) => {
    const currentCart = getDatabaseCart();
    currentCart[id] = count;
    localStorage.setItem(getDataId(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = id => {
    const currentCart = getDatabaseCart();
    delete currentCart[id];
    localStorage.setItem(getDataId(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
  localStorage.removeItem(getDataId());
}

const clearLocalShoppingCart = (cart) => {
    localStorage.removeItem(getDataId());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingCart,processOrder};


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(id) {
      return store[id]
    },
    setItem(id, value) {
      store[id] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

// end of poly fill