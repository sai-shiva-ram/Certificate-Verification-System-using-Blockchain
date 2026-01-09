const express = require("express");
const cors = require("cors");

const certificateRoutes = require("./routes/certificateRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/certificate", certificateRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
