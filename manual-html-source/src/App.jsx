import { Routes, Route } from "react-router-dom";
import AppLayout from "./app/AppLayout";
import Home from "./pages/Home";
import Tema0 from "./pages/Tema0";
import Tema1 from "./pages/Tema1";
import Tema2 from "./pages/Tema2";
import Tema3 from "./pages/Tema3";
import Tema4 from "./pages/Tema4";
import Tema5 from "./pages/Tema5";
import Tema6 from "./pages/Tema6";
import Tema7 from "./pages/Tema7";
import Tema8 from "./pages/Tema8";
import Tema9 from "./pages/Tema9";
import Tema10 from "./pages/Tema10";
import Tema11 from "./pages/Tema11";
import Tema12 from "./pages/Tema12";
import Tema13 from "./pages/Tema13";
import Tema14 from "./pages/Tema14";
import Tema15 from "./pages/Tema15";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
       <Route path="tema/0" element={<Tema0 />} />
        <Route path="tema/1" element={<Tema1 />} />
        <Route path="tema/2" element={<Tema2 />} />
        <Route path="tema/3" element={<Tema3 />} />
        <Route path="tema/4" element={<Tema4 />} />
        <Route path="tema/5" element={<Tema5 />} />
        <Route path="tema/6" element={<Tema6 />} />
        <Route path="tema/7" element={<Tema7 />} />
        <Route path="tema/8" element={<Tema8 />} />
        <Route path="tema/9" element={<Tema9 />} />
        <Route path="tema/10" element={<Tema10 />} />
        <Route path="tema/11" element={<Tema11 />} />
        <Route path="tema/12" element={<Tema12 />} />
        <Route path="tema/13" element={<Tema13 />} />
        <Route path="tema/14" element={<Tema14 />} />
        <Route path="tema/15" element={<Tema15 />} />
      </Route>
    </Routes>
  );
}
