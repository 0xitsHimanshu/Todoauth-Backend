import {app} from "./app.js";
import {connectDB} from "./data/database.js";

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("**** Server is working ****");
    console.log(`http://localhost:${process.env.PORT}`)
})