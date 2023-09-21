import express, { json } from "express";
import userRouter from "routers/user.routes";

const app = express();

app.use(json());
app.use(userRouter);

app.listen(5000, () => {
  console.log(`Server is up and running on port 5000`);
})
