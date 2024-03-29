import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"
import Projects from "./pages/Projects"
import Dashboard from "./pages/DashBoard"
import Header from "./components/Header"
export default function App() {
  return (
    <BrowserRouter >
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/sign-in" element={<Signin/>}></Route>
          <Route path="/projects" element = {<Projects/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}
