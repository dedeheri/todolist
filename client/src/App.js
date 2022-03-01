import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { MENU_COMPONENTS } from "./redux/action-type";

function App() {
  const dispatch = useDispatch();
  const { darkMode, menu } = useSelector((state) => state.style);

  useEffect(() => {
    function hideMenuAuto() {
      if (window.innerWidth > 768 && menu == true) {
        dispatch({ type: MENU_COMPONENTS, menu: false });
      }
    }

    window.addEventListener("resize", hideMenuAuto);

    return () => window.removeEventListener("resize", hideMenuAuto);
  });
  return (
    <div className={`h-screen ${darkMode ? "dark bg-[#0d1117]" : "light"}`}>
      <Navbar />
      <Grid>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tomorrow" element={<Main />} />
          <Route path="/complete" element={<Main />} />
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
