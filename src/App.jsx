import { Icon } from "@iconify/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function Layout() {
  return <>
    <Navbar />
    <Outlet />
    <p className="mb-4">Copyright © MRGA 2022. All rights reserved.</p>
  </>
}

function Home() {
  return <div className="flex-1 flex flex-col items-center justify-center">
    <h1 className="text-7xl -mt-12 mb-2">Long Live MRGA.</h1>
    <p className="text-2xl">We make cool projects. Our aim is to make React great again.</p>
    <div className="z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 overflow-hidden">
      <Icon icon="uil:react" className="w-full h-full text-teal-500 opacity-10 animate-spin [animation-duration:12s]" />
    </div>
  </div>
}

function About() {
  return <div className="flex-1 flex items-center justify-center w-3/4 text-center">
  <h1 className="text-2xl ">A team branched under Mirco Computer Society Foon Yew High School Johor Bahru, our target is to make as many cool projects as possible using the skills set we have acquired.</h1>
</div>
}

function Contact() {
  return <div className="flex-1 flex items-center justify-center">
  <h1 className="text-2xl ">Contact us</h1>
</div>
}

function App() {
  return (
    <div className="App w-full min-h-screen flex flex-col items-center text-neutral-700 selection:bg-teal-500 selection:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App