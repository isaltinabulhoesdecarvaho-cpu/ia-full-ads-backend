
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>res.json({status:"IA Full Ads Backend OK"}));

app.listen(3000, ()=>console.log("Backend rodando na porta 3000"));
