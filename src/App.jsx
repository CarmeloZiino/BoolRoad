import { BrowserRouter , Route , Routes } from "react-router-dom";
//Components



//Pages
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage"

//Layout

import DefaultLayout from "./layouts/DefaultLayout"


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/travels/:id" Component={TravelPage} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
