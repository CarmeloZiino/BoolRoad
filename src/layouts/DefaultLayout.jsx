
//Components
import Header from "../components/Header";

//Import Outlet
import { Outlet } from "react-router-dom";


export default function DefaultLayout() {

  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
