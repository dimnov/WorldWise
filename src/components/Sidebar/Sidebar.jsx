import { Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav.jsx";
import Footer from "../Footer/Footer.jsx";
import Logo from "../Logo/Logo.jsx";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
