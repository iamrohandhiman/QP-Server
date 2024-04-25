import express from "express";
import { endpointLogger } from "../middleware/endpointLogger.js";
import metaInfoRouter from "../routes/metaInfo.js";
import mongoose from "mongoose";


const app = express();
mongoose.connect('mongodb://localhost/QuestionVault')
.then(()=>console.log("connected to the Database"))
.catch((err)=>console.log(err))
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(endpointLogger);

app.use("/api", metaInfoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
