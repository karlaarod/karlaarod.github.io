import Footer from "./Footer";
import {NavBar, Home, About, Projects, Contact } from "./index"
import Skills from "./skills/Skills";


function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <div id='main-body'>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
