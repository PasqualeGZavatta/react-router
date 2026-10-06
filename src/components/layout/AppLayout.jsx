import { Outlet } from "react-router";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container mt-3">
        <Outlet />
      </main>

      <footer>Footer here</footer>
    </div>
  );
}
