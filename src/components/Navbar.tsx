import React from "react";
import { ModeToggle } from "./ToggleTheme";

function Navbar() {
  return (
    <nav>
      <div className="flex flex-row justify-between items-center container py-3">
        <h1>Project name</h1>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
