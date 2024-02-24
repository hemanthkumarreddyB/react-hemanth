import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button
              onClick={() => changeColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg bg-red-600"
            >
              Red
            </button>
            <button
              onClick={() => changeColor("green")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg bg-green-500"
            >
              Green
            </button>
            <button
              onClick={() => changeColor("blue")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg bg-blue-600"
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
