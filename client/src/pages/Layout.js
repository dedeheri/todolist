import React, { Children } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Grid>
        <Sidebar />
        {children}
      </Grid>
    </>
  );
};

export default Layout;
