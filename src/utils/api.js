import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-8uuc.onrender.com/api/",
});

export const getArticles = () => {
    console.log("getArticles Called");
    return api.get("/articles").then(({data}) => {
      return data;
    });
  };