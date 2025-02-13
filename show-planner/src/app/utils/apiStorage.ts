import { Scene, Transition } from "../types";

const apiUrl = 'http://localhost:8000/api';

export const saveToApi = async (key: string, data: Scene[] | Transition[]) => {
    console.log('saveToApi');
    let url = apiUrl;
    const body = { [key]: data };
    url = `${url}/${key}/create`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return response.json();
};

export const loadFromApi = async (key: string) => {
    let url = apiUrl;
    console.log('loadFromApi');
    url = `${url}/${key}`;
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};
