import React from "react";

export function Title({ currentTheme }) {
  return (
    <>
      <h1>{currentTheme === "dark" ? "Dark Mode" : "Light Mode"}</h1>
    </>
  );
}
