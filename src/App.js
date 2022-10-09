import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainview from "./components/Mainview";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Mainview>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
        </Routes>
      </Router>
    </Mainview>
  );
}

export default App;
