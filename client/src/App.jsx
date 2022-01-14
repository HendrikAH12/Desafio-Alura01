import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectList from "./pages/ProjectList";
import StyleGuild from "./pages/StyleGuild";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project/create" element={<ProjectCreate />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
        <Route path="/styleguild" element={<StyleGuild />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
