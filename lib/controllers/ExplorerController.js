const ExplorerService = require("../services/ExplorerService")
const Reader = require("../utils/Reader")
let explorers = new Reader

class ExplorerController {
    getExplorerByMission(mission){
        explorers = explorers.readJsonPath("./explorers.json");
        const xByMission = explorers.filter((explorer) => explorer.mission == mission);
        return xByMission;
    }
}
module.exports = ExplorerController