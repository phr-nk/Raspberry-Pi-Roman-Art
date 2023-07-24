import logo from "./logo.svg";
import "./App.css";
import Bust3D from "./Bust3D/Bust3D";

function App() {
  return (
    <div className="App">
      <Bust3D object="square.glb" shaders={true} animation="follow" />
    </div>
  );
}

export default App;
