import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ThemeToggleBtn from "./ThemeToggleBtn";

function Header() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme == "light" ? "#eeeeee" : "#122222",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <ThemeToggleBtn />
    </header>
  );
}

export default Header;
