import React from "react";
import { Content } from "../Content";
import { SwitchButton } from "../SwitchButton";
import { Title } from "../Title";

export function Main() {
  return (
    <div className="centered">
      <Title />
      <Content />
      <SwitchButton />
    </div>
  );
}
