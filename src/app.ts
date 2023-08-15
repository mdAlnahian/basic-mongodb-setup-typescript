import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";

//using cors
app.use(cors());

// parse data (using middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes);

export default app;

//pattern MVC , Modular

/*  BreakDown 
Interface --> user.interface.ts
Schema , Model --> user.model.ts

route 
route function - api route controller --> controller.ts
Database Query Function --> service.ts



*/

// inserting a test  data into mongodb
/* 
    step 1: Create an Interface (Done)
    step 2: Schema (Done)
    step 3: Model (Done)
    step 4: Database query { on Model  } (Done) 

    */
//   res.send("Hello World! panku");
//   next();
//creating an interface
// creating schema using interface
// create a async function as the user data will be saved using (async and await method)
