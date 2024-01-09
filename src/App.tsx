import "./App.css";
import { Menu, MenuItem } from "./components/Menu";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  return (
    <>
      <ThemeToggleButton></ThemeToggleButton>
      <Menu>
        <MenuItem></MenuItem>
      </Menu>
    </>
  );
}

export default App;
