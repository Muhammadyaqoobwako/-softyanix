import express from "express";
import whatsappRoute from "./routes/whatsapp.js";

const app = express();

app.use("/api/whatsapp", whatsappRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
