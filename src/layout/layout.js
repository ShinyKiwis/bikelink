import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Layout({ children }) {
  return (
    <>
      <SearchBar />
      <main>{children}</main>
      <NavBar />
    </>
  );
}

export default Layout;
