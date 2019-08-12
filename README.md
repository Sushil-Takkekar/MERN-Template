# MERN stack template
Use this template to create MERN stack app in a faster way.

### Project Structure
```bash
.
├── node_modules    ------------------- To store server dependencies
├── client    ------------------------- Contains frontend (React) code
│   ├── node_modules    --------------- To store client dependencies
│   ├── public    --------------------- Store public assets (main html file, favicon, manifest.json)
│   │   └── index.html    ------------- Main html file, which Reat loads
│   ├── src    ------------------------ Store all the React source code
│   │   ├── axios    ------------------ Contains files which makes a call backend server using axios library
│   │   ├── components    ------------- Store all the React components, except App component
│   │   ├── store    ------------------ Contains all the code to manage Store data
│   │   │   ├── actions    ------------ Store all the action-creator functions in this folder 
│   │   │   │   └── types.js    ------- Register all the action-types used accross application
│   │   │   ├── reducers    ----------- Store all reducer functions in this folder
│   │   │   │   └── index.js    ------- Combine all the reducers into this root-reducer
│   │   │   └── store.js    ----------- Create a store and configure middleware using redux-thunk
│   │   ├── utils    ------------------ All the custom utilities created by developer (ex. formating a date)
│   │   ├── App.js    ----------------- Root/parent component which renders first
│   │   └── index.js    --------------- Main js file which renders App component inside root div
│   ├── .gitignore    ----------------- Keeps track of what to ignore in git commit
│   ├── package.json    --------------- A file with metadata about the application/project
│   └── package-lock.json    ---------- Keeps track of dependency tree and ensures that every env has same setup
├── config    ------------------------- To store env variables for different environments (Dev,Test,prod)
├── src    ---------------------------- Store all NodeJs/backend code
│   ├── db    ------------------------- Contains all the code which deals with database
│   │   ├── operations    ------------- All db operations should be kept here
│   │   └── db.js    ------------------ Connect to mongoDB database using mongoose
│   ├── middlewares    ---------------- Should contain all the middleware functions (like logging,authentication)
│   ├── models    --------------------- Store all the db models (with schemas)
│   ├── routes    --------------------- All routes should be kept here and not on main express file
│   ├── express.js    ----------------- Configure express to use routers, middlewares and other things
│   └── index.js    ------------------- Configure http server and listen on particular port
├── .babelrc    ----------------------- Configure babel for the app
├── .eslintrc.json    ----------------- Configure eslint to format the code
├── .gitignore    --------------------- Keeps track of what to ignore in git commit
├── package.json    ------------------- A file with metadata about the application/project
├── package-lock.json    -------------- Keeps track of dependency tree and ensures that every env has same setup
├── README.md    ---------------------- Contains info about the repository
└── webpack.config.js    -------------- Configure webpack to bundle the app

```

#### Use of above folder/files

-  **client**            : Contains frontend code - React app
-  **config**            : Store all your env variables (include this in your .gitignore file)
-  **src**               : Your entire server code
-  **.babelrc**          : Babel configuration file
-  **.eslintrc.json**    : ESLint configuration file
-  **webpack.config.js** : Webpack configuration file

[ NOTE : *Remove **.gitignore** file from empty folders, if not required.*]
