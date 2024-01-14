import "./App.css";
import RenderingTest1 from './render/renderingTest1.tsx';
import CountController from "./component/CountController.tsx";


function App() {
  return (
    <>
      <div>
          <RenderingTest1/>
          <CountController/>
      </div>
    </>
  );
}

export default App;
