import express from "express";
import { endpointLogger } from "../middleware/endpointLogger.js";
import metaInfoRouter from "../routes/metaInfo.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(endpointLogger);

app.use("/api", metaInfoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
