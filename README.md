# Assignment4
Assignment: Secure Task Manager (MERN API Security with JWT) ,Objective: Enhance the existing Task Manager API by securing endpoints with authentication and authorization using JSON Web Tokens (JWT). Implement user registration, login, and ensure tasks can only be accessed by their respective owners.

 **Making folder**
<p>mkdir user-auth-app</p>

**Installing json package**
<p>npm init -y</p>

**using that folder**
<p>cd user-auth-app</p>

**Installing express mongoose bcryptjs dotenv**
<p>npm install express mongoose bcryptjs dotenv</p>

**for JSON Web Tokens (JWT)**
<p>  npm install jsonwebtoken</p>

**for CORS(CROSS ORIGIN RESOURCE SHARING**
<p>npm install cors</p>

**To install axios react-router-dom jwt-decode react-toastify**
<p>npm install axios react-router-dom jwt-decode react-toastify</p>

### Dependencies

* **express**: Web framework for building APIs.
* **mongoose**: ODM for MongoDB, used to define models and interact with the database.
* **bcryptjs**: Library for hashing and comparing passwords securely.
* **dotenv**: Loads environment variables from a `.env` file.
* **jsonwebtoken**: Implements JWT for secure, stateless authentication and authorization.
* **cors**: Enables Cross-Origin Resource Sharing, allowing the React frontend to communicate with the server.
* **axios** : Promise-based HTTP client used to send requests from the frontend to the backend API.
* **react-router-dom**: Handles navigation and dynamic routing within the React application.
* **jwt-decode**: Helper library used on the client side to decode JWTs and verify user roles.
* **react-toastify**: Provides elegant, pop-up notifications for user feedback on login or error events.
  
**Note:** Once installed, you'll see these packages listed in your `package.json` under the `dependencies` section.
 
 
# FILE STRUCTURE :
 <p>The USER-AUTH-APP follows a modular, layer-based architecture designed for security and scalability. At the core is server.js, which initializes the Express application, enables CORS for frontend communication, and connects to MongoDB via the config/ directory. The system’s security is managed within the middleware/ folder, using authmw.js for token validation and authorize.js for role-based access control, ensuring that routes are protected based on user permissions. Data integrity is maintained through Mongoose schemas located in the models/ folder, while the API's functional endpoints are neatly organized within the routes/ directory. On the client side, the src/ folder houses the React frontend components, including the login logic and various role-specific dashboards. All sensitive configuration, such as database credentials and JWT secrets, is securely managed via a .env file at the project root.</p>
  
