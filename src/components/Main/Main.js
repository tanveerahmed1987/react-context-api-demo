import React from "react";
import { Content } from "../Content";
import { SwitchButton } from "../SwitchButton";
import { Title } from "../Title";

export function Main({ theme, changeTheme, currentTheme }) {
  return (
    <div className="centered">
      <Title currentTheme={currentTheme} />
      <Content theme={theme} />
      <SwitchButton theme={theme} changeTheme={changeTheme} />
    </div>
  );
}
