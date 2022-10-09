import {PlainMessage} from "components/Message/PlainMessage";

export const SystemMessage = (props : { text : string}) => <PlainMessage messageKind={"system"} text={props.text}/>

export const EmptyChatMessage = () => <SystemMessage text={"This chat is empty! Be the first one to write!"}/>