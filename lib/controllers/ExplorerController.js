const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");
let explorersReader = new Reader;
let xServices = new ExplorerService;
class ExplorerController {
    getExplorersByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xByMission = xServices.filterByMission(explorers,mission);
        return xByMission;
    }
    getExplorersUsernamesByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xUsersByMission = xServices.getExplorersUsernamesByMission(explorers,mission);
        return xUsersByMission;
    }
    getExplorersAmountByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xAmountByMission = xServices.getAmountOfExplorersByMission(explorers,mission);
        return xAmountByMission;
    }
}
module.exports = ExplorerController;