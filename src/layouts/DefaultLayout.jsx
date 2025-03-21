//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Import Outlet
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
