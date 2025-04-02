import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import {Articles} from "./Articles";



export const Body = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    );
  };