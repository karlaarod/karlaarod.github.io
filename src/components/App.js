import {NavBar, Home, About, Projects, Contact } from "./index"


function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <div id='main-body'>
    <About/>
    <Projects/>
    <Contact/>
    </div>
    </>
  );
}

export default App;
