import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";

function ThemeToggleBtn() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      className="toggle"
      onClick={toggleTheme}
      style={{
        background: theme == "light" ? "black" : "white",
        color: theme == "light" ? "white" : "black",
      }}
    >
      {theme === "light" ? <BsToggle2On /> : <BsToggle2Off />}
    </button>
  );
}

export default ThemeToggleBtn;
