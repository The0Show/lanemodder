// Lanerunner mod loader
// (c) 2023

isModded = true;

function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

var initializedProperly = false;
var modsLoaded = 0;

waitForElm("canvas").then(() => {
    startState.create = function () {
        game.add.text(
            0,
            0,
            `LaneModder v0.0.1 - (c) 2023 The0Show\n${modsLoaded} mod${
                modsLoaded == 1 ? "" : "s"
            } loaded.\nLeaderboard disabled.\nPress ENTER to trigger debug crash`,
            {
                font: "32px Arial",
                fill: "#ffffff",
                align: "left",
                wordWrap: true,
                wordWrapWidth: wordWrapMod * scale.x,
            }
        );

        var debugButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        debugButton.onDown.add(throwDebugError);
    };

    // Yes, this is taken right out of utils.js
    var fileCounter = 0;
    var files = ["js/mod/poc.js"];
    var retries = parent.window.gameBridge
        ? parent.window.gameBridge.info.numberOfRetries
        : 1;
    var retriesRemaining = retries;

    var loadNext = function (_retriesRemaining) {
        console.log(`Waiting for ${files[fileCounter]}`);
        while (!initializedProperly) {}
        initializedProperly = false;
        modsLoaded += 1;

        if (++fileCounter < files.length) {
            loadJS(files[fileCounter], loadNext, _retriesRemaining);
        } else {
            console.log(
                `${modsLoaded} mod${
                    modsLoaded == 1 ? "" : "s"
                } loaded successfully`
            );

            game.state.start("start"); // Restart the game
        }
    };

    loadJS(files[fileCounter], loadNext, retries);

    function throwDebugError() {
        throw new Error("Manually triggered debug crash");
    }
});
