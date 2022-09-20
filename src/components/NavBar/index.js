import NavBarStyle from "./NavBar.module.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbRoute } from "react-icons/tb";
import {MdOutlineLogout} from "react-icons/md"

const NavItem = ({ title, Icon }) => {
  return (
    <div className={NavBarStyle.nav_item}>
      <Icon className={NavBarStyle.nav_icon} />
      <span>{title}</span>
    </div>
  );
};

function NavBar() {
  return (
    <nav className={NavBarStyle.nav_container}>
      <NavItem title="Setting" Icon={AiOutlineSetting} />
      <NavItem title="Profile" Icon={BsPerson} />
      <NavItem title="My Location" Icon={HiOutlineLocationMarker} />
      <NavItem title="Routes" Icon={TbRoute} />
      <NavItem title="Log out" Icon={MdOutlineLogout} />
    </nav>
  );
}

export default NavBar;
