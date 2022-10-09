import {useToggle} from "@mantine/hooks";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

let fakeIDs : string[] = [];

if(window.localStorage.getItem("fakeIDs")) {
  console.log(window.localStorage.getItem("fakeIDs")!)
  fakeIDs =  window.localStorage.getItem("fakeIDs")!.split(',');
} else {
  fakeIDs = [uuidv4().toString()]
  window.localStorage.setItem("fakeIDs", fakeIDs.toString())
}

export const useFakeUserID = () => {
  const [shouldUseFakeID, toggleShouldUseDebugID] = useToggle();
  const [fakeID, setFakeID] = useState(fakeIDs[0]);

  const updateCurrentFakeID = (index : number) => setFakeID(fakeIDs[index]);
  const addFakeId = () => {
    fakeIDs.push(uuidv4().toString());
    setFakeID(fakeID);
  }

  return {
    shouldUseFakeID,
    toggleShouldUseDebugID,
    fakeID,
    updateCurrentFakeID,
    addFakeId,
  }
}