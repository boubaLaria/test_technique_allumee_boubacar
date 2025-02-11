export const saveToLocalStorage = (key: string, data: unknown) => {
    console.log('saveToLocalStorage');
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key: string) => {
    console.log('loadFromLocalStorage');
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};
