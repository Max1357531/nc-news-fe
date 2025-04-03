import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import {Articles} from "./Articles";
import { Topics } from "./Topics";



export const Body = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    );
  };