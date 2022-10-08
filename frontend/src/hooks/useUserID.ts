import {v4 as uuidv4} from 'uuid';

export const useUserID = () => {
    const userID = window.localStorage.getItem('userID');
    if (userID !== null) return userID.toString();

    const uuid = uuidv4();
    localStorage.setItem('userID', uuid.toString());
    return uuid.toString();
}