const ExplorerController = require("./controllers/ExplorerController");
const XController = new ExplorerController;
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorerInMission = XController.getExplorersByMission(mission);
    response.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = XController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesInMission = XController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernamesInMission});
});

app.get("/v1/explorers/fizzbuzz/:score", (request, response) => {
    const number = request.params.score;
    const fizzbuzzNumber = XController.getApplyValidationInNumber(number);
    response.json({score: request.params.score, trick: fizzbuzzNumber});
});