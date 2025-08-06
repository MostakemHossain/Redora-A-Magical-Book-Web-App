import express from "express";
const app = express();
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import notFound from "./middleware/notFound.js";


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler);
app.use(notFound);


export default app;