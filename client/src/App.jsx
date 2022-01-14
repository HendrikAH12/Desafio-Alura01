import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectList from "./pages/ProjectList";
import StyleGuild from "./pages/StyleGuild";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Desafio-Alura/project/create" element={<ProjectCreate />}></Route>
        <Route path="Desafio-Alura/projects" element={<ProjectList />}></Route>
        <Route path="Desafio-Alura/styleguild" element={<StyleGuild />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
