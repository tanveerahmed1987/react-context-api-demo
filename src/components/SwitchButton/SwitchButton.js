import React from "react";

export function SwitchButton({ theme, changeTheme }) {
  return (
    <button
      onClick={changeTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
}
