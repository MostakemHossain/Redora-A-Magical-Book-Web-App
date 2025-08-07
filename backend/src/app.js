import express from "express";
const app = express();
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import notFound from "./middleware/notFound.js";
import router from "./routes/index.js";


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(router);

app.use(globalErrorHandler);
app.use(notFound);


export default app;