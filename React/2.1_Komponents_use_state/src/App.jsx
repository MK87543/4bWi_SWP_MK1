import React from "react";
import "./App.css";
import Page1 from "./components/pages/Page1.tsx";
import Page2 from "./components/pages/Page2.tsx";

function App() {
  const [showFriends, setShowFriends] = React.useState(true);


  return <div>
    {
      showFriends ? <Page1 /> : <Page2 />
    }

  </div>
}



export default App;
