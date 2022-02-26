import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [view, setView] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function hideMenuAuto() {
      if (window.innerWidth > 768 && showMenu == true) {
        setShowMenu(false);
      }
    }

    window.addEventListener("resize", hideMenuAuto);

    return () => window.removeEventListener("resize", hideMenuAuto);
  });
  return (
    <>
      <Navbar
        view={view}
        setView={setView}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Grid>
        <Sidebar showMenu={showMenu} />
        <Routes>
          <Route
            path="/"
            element={<Main view={view} setView={setView} showMenu={showMenu} />}
          />
          <Route
            path="/tomorrow"
            element={<Main view={view} setView={setView} />}
          />
          <Route
            path="/complete"
            element={<Main view={view} setView={setView} />}
          />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
