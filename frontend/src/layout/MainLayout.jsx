import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="dark:bg-black overflow-hidden">
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};

export default MainLayout;
