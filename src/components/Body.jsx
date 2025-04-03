import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import {Articles} from "./Articles";
import { Topics } from "./Topics";
import { Article } from "./Article";



export const Body = () => {
    return (
      <div className="bodyRoute">
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
      </div>
      
    );
  };