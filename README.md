# Assignment4
Assignment: Secure Task Manager (MERN API Security with JWT) ,Objective: Enhance the existing Task Manager API by securing endpoints with authentication and authorization using JSON Web Tokens (JWT). Implement user registration, login, and ensure tasks can only be accessed by their respective owners.
<h2>Making folder </h2>
<P>mkdir user-auth-app</p>
<h2>Installing json package</h2>
<p>npm init -y</p>
<h2>Installing express mongoose bcryptjs dotenv</h2>
<p>npm install express mongoose bcryptjs dotenv</p>

**for JSON Web Tokens (JWT)**
<p>  npm install jsonwebtoken</p>
 
### Dependencies

* **express**: Web framework for building APIs.
* **mongoose**: ODM for MongoDB, used to define models and interact with the database.
* **bcryptjs**: Library for hashing and comparing passwords securely.
* **dotenv**: Loads environment variables from a `.env` file.

**Note:** Once installed, you'll see these packages listed in your `package.json` under the `dependencies` section.

# FILE STRUCTURE :

USER-AUTH-APP/
|── config/
│   └── db.js              # Database connection configuration
├── middleware/
│   ├── authmw.js          # Authentication middleware
│   └── authorize.js       # Role-based authorization middleware
├── models/
│   └── user.js            # User schema and model
├── routes/
│   ├── admin.js           # Admin specific routes
│   ├── auth.js            # Authentication routes (Login/Register)
│   ├── editor.js          # Editor specific routes
│   └── profile.js         # User profile routes
├── .env                   # Environment variables (Secret)
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Dependency tree lockfile
└── server.js              # Entry point of the application
npm install axios react-router-dom jwt-decode react-toastify
