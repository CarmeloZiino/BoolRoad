//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rubrica from "../components/Rubrica"

//Import Outlet
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="mt-3">
      
      <Outlet />
      <Rubrica />
      </main>
      <Footer />
    </>
  );
}
