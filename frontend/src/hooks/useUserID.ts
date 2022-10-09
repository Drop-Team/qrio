import {v4 as uuidv4} from 'uuid';
import {useFakeUserID} from "hooks/useFakeUserID";

export const useUserID = () => {
    const {shouldUseFakeID, fakeID} = useFakeUserID();
    const userID = window.localStorage.getItem('userID');
    if (userID !== null) return userID.toString();

    const uuid = uuidv4();
    localStorage.setItem('userID', uuid.toString());
    return shouldUseFakeID ? uuid.toString() : fakeID;
}