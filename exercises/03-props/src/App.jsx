<<<<<<< HEAD
import "./App.css";
import Welcome from "./components/Welcome/Welcome"
import Heading from "./components/Heading/Heading"
// import something here
=======
import './App.css';

import { Heading } from './components/Heading/Heading';
import { Welcome } from './components/Heading/welcome/Welcome';
>>>>>>> 94a6bad2eeec12d558add2b2607981eed1deb495

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Welcome name="Catherine" />
    <Heading>Welcome to my React app!</Heading>
    </div>
  )
=======
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Ariadna" />
      <Welcome />
    </div>
  );
>>>>>>> 94a6bad2eeec12d558add2b2607981eed1deb495
}





export default App;
