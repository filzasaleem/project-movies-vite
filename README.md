
# Movie Site Project
The Movie Site Project is a multi-page React application that leverages APIs, with a primary focus on React Router.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Dependency Installation & Startup Development Server
Once cloned, navigate to the project's root directory. This project uses npm (Node Package Manager) to manage its dependencies.

The following command combines installing dependencies, opening up the project on VS Code, and starting a development server on your terminal:

```bash
npm i && code . && npm run dev
```
Additionally, you need to install react-router-dom for routing. Run the following command:
```bash
npm install react-router-dom
```

### The Challange

This is a multipage project with the following key features:

#### Home Page:
Displays movies fetched from an API endpoint.
Handles a loading state when data is being fetched.
#### Movie Categories:
Users can select popular, upcoming, or top-rated movies.
#### Movie Details Page:
Clicking on a movie in the home page routes to a detailed page for that movie.
The page includes a back button and a detailed description of the movie.
#### Similar Movies:
Users can click on similar movies to view a list fetched using a different API.
#### Not Found Page:
Displays in case the user enters the wrong movie ID.

### Technologies used
1. React- router
2. react componenst
3. React Hooks (useState,useEffect)
4. movies API end point
5. tailwind css

### Future work
Potential areas for future improvements and expansion include:

#### Additional Pages:
Add pages for each actor involved in movies to provide more comprehensive information.
#### CSS Improvement:
Consider improving the CSS by transitioning away from Tailwind CSS for better code readability.

### View it live
experience the movie sit live : [movies-site](https://filzas-movies-project.netlify.app/)

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>

