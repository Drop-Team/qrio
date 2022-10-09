import React from "react";
import styles from "./DebugDrawer.module.scss";
import {IconChevronsDown, IconChevronsUp} from "@tabler/icons";
import {useToggle} from "@mantine/hooks";

export interface DebugDrawerProps {}

export const DebugDrawer:React.FC<DebugDrawerProps> = (props) => {
  const [isExpanded, toggle] = useToggle();

  return <div className={styles[`debug-drawer${isExpanded ? "" : "-contracted"}`]}>
    <div className={styles["puller"]} onClick={() => toggle()}>
      <IconChevronsUp/>
    </div>
    <h1>Debug Drawer</h1>
  </div>
}