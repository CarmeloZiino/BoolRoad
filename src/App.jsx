import { BrowserRouter , Route , Routes } from "react-router-dom";
//Components
import TraveList from "./components/TraveList";

//Pages
import HomePage from "./pages/HomePage";

//Layout

import DefaultLayout from "./layouts/DefaultLayout"


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
