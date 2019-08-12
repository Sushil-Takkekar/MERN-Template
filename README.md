# MERN stack template
Use this template to create MERN stack app in a faster way.

### Project Structure
```bash
.
├── node_modules
├── client
│   ├── node_modules
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── axios
│   │   ├── components
│   │   ├── store
│   │   │   ├── actions
│   │   │   │   └── types.js
│   │   │   ├── reducers
│   │   │   │   └── index.js
│   │   │   └── store.js
│   │   ├── utils
│   │   ├── App.js
│   │   └── index.js
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
├── config
├── src
│   ├── db
│   │   ├── operations
│   │   └── db.js
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── express.js
│   └── index.js
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── webpack.config.js

```

#### Use of above folder/files

-  **client**            : Contains frontend code - React app
-  **config**            : Store all your env variables (include this in your .gitignore file)
-  **src**               : Your entire server code
-  **.babelrc**          : Babel configuration file
-  **.eslintrc.json**    : ESLint configuration file
-  **webpack.config.js** : Webpack configuration file

[ NOTE : *Remove **.gitignore** file from empty folders, if not required.*]