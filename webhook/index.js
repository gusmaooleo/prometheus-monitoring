import express from "express";

const app = express();
app.use(express.json());

app.post("/alert", (req, res) => {
  console.log("ALERTA RECEBIDO:");
  console.log(JSON.stringify(req.body, null, 2));

  res.sendStatus(200);
});

app.get("/alert", (req, res) => {
  console.log("DISCOVERABLE");
  res.sendStatus(200);
});

app.listen(6000, "0.0.0.0", () => {
  console.log("Webhook rodando na porta 6000");
});
