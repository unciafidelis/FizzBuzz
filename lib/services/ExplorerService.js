class ExplorerService{
    filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission
    }
}

module.exports = ExplorerService