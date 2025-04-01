import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";



export const Body = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    );
  };