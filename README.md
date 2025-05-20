# EchoPress

This full-stack web application is interfaces with my [Backend API](https://github.com/Max1357531/nc-news) to provide a discussion board for news articles, complete with a commenting and 'upvoting' system. The goal of this project was to put together a fullstack project using free hosting resources available online.

> The front end of this project is hosted [here](https://nc-news-fe-vercel.vercel.app/).
> N.B. the free backend hosting service ([render](https://render.com/)) spinsdown after inactivity. Please be aware that it will take ~60 seconds for the backend service to spin up. Allow for this time between loading the webpage for the first time and exploring the webpage.

## Design choices
### Backend Structure
 A simple relational database structure underpins the backend of the project. This database is comprised of four tables, topics, articles, comments and users. 
 ![](./assets/diagram.png) 
### Color Scheme 
 The page uses two key color schemes for dark and light modes. Interactivity within a page or comment has it's own color and links to other pages have another color to differentiate clicking away from a page and interacting with it. 

Dark mode           |  Light mode
:-------------------------:|:-------------------------:
![](./assets/Dark.png)  |  ![](./assets/Light.png)
 
### Responsive Design 
 The page includes examples of responsive design, for example on the Topics page, a grid of images from most recent articles attached the topic are displayed. Hovering over one of said images provides details of the article in the alternate side of the grid.
Before hover           |  On hover
:-------------------------:|:-------------------------:
![](./assets/PreHover.png)  |  ![](./assets/OnHover.png)
t
## Tech Stack
### Backend

 Express.js           |  PostgreSQL | Jest | JavaScript
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
![image](https://github.com/user-attachments/assets/cfbbecf7-a132-4e26-8ea9-fe9d80954260) | ![image](https://github.com/user-attachments/assets/7f7c3b91-279b-45ee-9861-c6c083537ca6) |![image](https://github.com/user-attachments/assets/e59932d6-a1a9-4345-8b6c-69ba0e2cc98c) | ![image](https://github.com/user-attachments/assets/22da575e-7d98-43c4-ac35-d3fb71c2a317)



### Frontend

React        | Axios | JavaScript
:-------------------------:|:-------------------------:|:-------------------------:
![image](https://github.com/user-attachments/assets/a15e0bed-06b9-42c4-acf2-e8c28a667f2d) | ![image](https://github.com/user-attachments/assets/5484bab1-886c-4573-8407-e2341479bbfc) | ![image](https://github.com/user-attachments/assets/22da575e-7d98-43c4-ac35-d3fb71c2a317)


