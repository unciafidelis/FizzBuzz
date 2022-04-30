const ExplorerController = require("./../lib/controllers/ExplorerController");
let XController = new ExplorerController;
describe("Testing ExplorerController class", () => {
    test("1) get explorers by mission", () => {
        expect(XController.getExplorersByMission("node")).toStrictEqual(
            [
                {
                    "name": "Woopa1",
                    "githubUsername": "ajolonauta1",
                    "score": 1,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "reasonML",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa2",
                    "githubUsername": "ajolonauta2",
                    "score": 2,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "groovy",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa3",
                    "githubUsername": "ajolonauta3",
                    "score": 3,
                    "mission": "node",
                    "stacks": [
                        "elixir",
                        "groovy",
                        "reasonML"
                    ]
                },
                {
                    "name": "Woopa4",
                    "githubUsername": "ajolonauta4",
                    "mission": "node",
                    "score": 4,
                    "stacks": [
                        "javascript"
                    ]
                },
                {
                    "name": "Woopa5",
                    "githubUsername": "ajolonauta5",
                    "score": 5,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa11",
                    "githubUsername": "ajolonauta11",
                    "score": 11,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa12",
                    "githubUsername": "ajolonauta12",
                    "score": 12,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa13",
                    "githubUsername": "ajolonauta13",
                    "score": 13,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa14",
                    "githubUsername": "ajolonauta14",
                    "score": 14,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                },
                {
                    "name": "Woopa15",
                    "githubUsername": "ajolonauta15",
                    "score": 15,
                    "mission": "node",
                    "stacks": [
                        "javascript",
                        "elixir",
                        "groovy",
                        "reasonML",
                        "elm"
                    ]
                }
            ] 
        );
    });
    test("2) get explorers usernames by mission", () => {
        expect(XController.getExplorersUsernamesByMission("node")).toStrictEqual(
            ["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5", 
                "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]
        );
    });
    test("3) get explorers amount by mission", () => {
        expect(XController.getExplorersAmountByMission("node")).toStrictEqual(10);
    });
});