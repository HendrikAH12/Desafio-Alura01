import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project/create" element={<ProjectCreate />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
