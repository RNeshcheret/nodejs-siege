const { json } = require("express");
const express = require("express");
const app = express();
const port = process.env.NODE_APP_PORT || 4000;
const { getDbConnection } = require("./mongo");

function startServer() {
  app.use(json());

  app.post("/db", async (req, res) => {
    const db = await getDbConnection();
    const body = req.body;
    console.log(body);

    try {
      await db.collection("task").insertOne({
        body,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(body);
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
