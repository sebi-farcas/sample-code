/**
 *  store data into session storage
 * @param key session key
 * @param value encode data
 */
export const saveToSession = (key: string, value: any): boolean => {
    try {
        const decodedData = typeof value === 'object' ? JSON.stringify(value) : value;
        sessionStorage.setItem(key, decodedData);
        return true;
    } catch (error) {
        return false;
    }
};

/**
 *  remove data from session storage
 * @param key session key
 */
export const removeFromSession = (key: string): void => {
    return sessionStorage.removeItem(key);
};

/**
 * retrieve data from session storage
 * @param key local session key
 */
export const retrieveFromSession = (key: string): any => {
    const data = sessionStorage.getItem(key);
    try {
        const decodeData = data ? JSON.parse(data) : data;
        return decodeData;
    } catch (error) {
        return data === 'undefined' ? undefined : data;
    }
};
