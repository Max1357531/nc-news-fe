import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-8uuc.onrender.com/api/",
});

export const getArticles = (topic) => {
    return api.get("/articles",{params:{topic}}).then(({data}) => {
      return data;
    });
  };
  
export const getTopics = () => {
    return api.get("/topics").then(({data}) => {
      return data;
    });
  };

export const getArticle = (id) => {
  return api.get(`/articles/${id}`).then(({data})=>{
    return data
  })
}
export const getCommentsById = (id) => {
  return api.get(`/comments`,{params:{article_id:id}}).then(({data})=>{
    return data
  })
}