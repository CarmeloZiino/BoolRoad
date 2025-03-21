import { BrowserRouter } from "react-router-dom";

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
