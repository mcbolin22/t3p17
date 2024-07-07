

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message:"Hello world!"
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});