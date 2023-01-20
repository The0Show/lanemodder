// Lanerunner mod loader
// (c) 2023

try {
    isModded = true;

    alert("loader init");

    // Yes, this is taken right out of utils.js
    var fileCounter = 0;
    var files = ["js/mod/poc.js"];
    var retries = parent.window.gameBridge
        ? parent.window.gameBridge.info.numberOfRetries
        : 1;
    var retriesRemaining = retries;

    var loadNext = function (_retriesRemaining) {
        if (++fileCounter < files.length) {
            loadJS(files[fileCounter], loadNext, _retriesRemaining);
        }
    };

    loadJS(files[fileCounter], loadNext, retries);

    function throwDebugError() {
        throw new Error("Manually triggered debug crash");
    }

    startState.create = function () {
        game.add.text(
            0,
            0,
            "LaneModder v0.0.1 - (c) 2023 The0Show\n1 mod loaded.\nLeaderboard disabled.\nPress ENTER to trigger debug crash",
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
} catch (error) {
    alert(error.message);
}
