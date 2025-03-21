import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clicks from "./components/click_count.jsx";
import ClickPage from "./components/pages/ClickPage.jsx";
import People from "./components/PeopleContainer/People.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-3 gap-4">
      <People />
    </div>
  );
}

export default App;
