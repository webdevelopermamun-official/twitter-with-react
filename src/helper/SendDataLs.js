export const setLocalStorage = (key, value) => {
    let contact_data = [];
    // check localStorage data check
    if(localStorage.getItem(key)){
        contact_data = JSON.parse(localStorage.getItem(key));
    }

    // data push
    contact_data.push(value)

    // check new data insert localStorage
    localStorage.setItem(key, JSON.stringify(contact_data));
}

export const getLocalStorage = (key) => {
    try {
        // Attempt to retrieve data from local storage
        const storedData = localStorage.getItem(key);

        if (storedData !== null) {
            // Parse the stored data from JSON
            return JSON.parse(storedData);
        } else {
            // Key does not exist in local storage
            return null;
        }
    } catch (error) {
        console.error('Error getting local storage:', error);
        return null; // Error
    }
}




export const setLsDarkModeData = (key, value) => {
    try {
        // Attempt to store data in local storage
        localStorage.setItem(key, JSON.stringify(value));
        return true; // Success
    } catch (error) {
        console.error('Error setting local storage:', error);
        return false; // Error
    }
}

