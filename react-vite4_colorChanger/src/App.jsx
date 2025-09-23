import { useState } from "react";
import "./App.css";

function App() {
  const [Color, setColor] = useState("olive");

  const colors = [
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Purple", value: "purple", class: "bg-purple-500" },
    { name: "Orange", value: "orange", class: "bg-orange-500" },
    { name: "Pink", value: "pink", class: "bg-pink-500" },
  ];

  return (
    <div
      className="w-full h-screen duration-500 flex flex-col items-center justify-center"
      style={{ backgroundColor: Color }}
    >
      {/* Title */}
      <h1 className="p-6 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl">
        <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 font-serif italic drop-shadow-md">
          🎨 Color Changer
        </span>
        <p className="text-center mt-2 text-lg text-white/80">
          By Debanjan
        </p>
      </h1>

      {/* Button container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white/30 backdrop-blur-xl px-5 py-4 rounded-3xl border border-white/40">
          {colors.map((c) => (
            <button
              key={c.value}
              className={`${c.class} w-14 h-14 md:w-16 md:h-16 rounded-full shadow-md hover:scale-110 transform transition-all duration-300 border-2 border-white/50`}
              onClick={() => setColor(c.value)}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
