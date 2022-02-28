import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [view, setView] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  console.log(isOpen);

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
    <div className={darkMode ? "dark" : "light"}>
      <Navbar
        view={view}
        setView={setView}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Grid>
        <Sidebar showMenu={showMenu} setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                view={view}
                setView={setView}
                showMenu={showMenu}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            }
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
    </div>
  );
}

export default App;
