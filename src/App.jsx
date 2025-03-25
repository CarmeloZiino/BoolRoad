import { BrowserRouter , Route , Routes } from "react-router-dom";

//Components
import RubricaPage from "./pages/RubricaPage"


//Pages
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage"

//Layout
import DefaultLayout from "./layouts/DefaultLayout"
import TravelDetails from "./pages/TravelDeatils";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/travels/:id" Component={TravelPage} />
              <Route path="/travels/rubrica" Component={RubricaPage} />
              <Route path="/travels/:id/person/:personId" Component={TravelDetails} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
