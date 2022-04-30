const ExplorerService = require("../services/ExplorerService")
const Reader = require("../utils/Reader")
let explorersReader = new Reader
let xServices = new ExplorerService
class ExplorerController {
    getExplorerByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xByMission = xServices.filterByMission(explorers,mission)
        return xByMission
    }
    getExplorersUsernamesByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xUsersByMission = xServices.getExplorersUsernamesByMission(explorers,mission)
        return xUsersByMission
    }
}
module.exports = ExplorerController