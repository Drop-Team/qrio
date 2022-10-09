import {DebugDrawerProps} from "components/DebugDrawer/DebugDrawer";
import {useMessengerAPI} from "hooks/useMessengerAPI";

export const useDebugDrawerLogic = (props: DebugDrawerProps) => {
  const [
    chat,
    fetchChat,
    sendMessage,
  ] = useMessengerAPI();

  return {

  }
}