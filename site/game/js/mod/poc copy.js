// Proof-of-Concept lanerunner mod
// (c) 2023 The0Show

// this fixes reloading assets every time the menu loads
// var hasLoaded = false;

SpawnType = {
    POWER_UP: 0,
};

SPAWN_INTERVAL = 0;
GAME_SECONDS = 3600;

// SUPER_STAR_CHANCE = 100;
// SUPERSTAR_POINTS = 1;
// STAR_POINTS = 1;

// startState.preload = function () {
// 	initRetryLoaders(game, this, startState.postCreate);

// 	if (!hasLoaded) {
// 		game.load.image("background", "assets/images/Bg_Space_00.jpg");
// 		game.load.image("splash", "assets/images/GS_TITLE.png");
// 		game.load.image("lane", "assets/images/Path_00.png");
// 		game.load.image("fret", "assets/images/fret_00.png");
// 		game.load.image("tutorialButton", "assets/images/TITLE_help.png");
// 		game.load.image("smallCloseButton", "assets/images/TITLE_close.png");
// 		game.load.atlas(
// 			"playerAtlas",
// 			"js/mod/playerAtlas.png",
// 			"assets/playerAtlas.json"
// 		);
// 		game.load.spritesheet(
// 			"playButtonSheet",
// 			"assets/images/GS_play_spritesheet.png",
// 			400,
// 			150,
// 			3
// 		);
// 		game.load.spritesheet(
// 			"audioButtonSheet",
// 			"assets/images/TITLE_audio_spritesheet.png",
// 			100,
// 			100,
// 			2
// 		);
// 		game.load.image("background", "assets/images/Bg_Space_00.png");
// 		game.load.image("scale9White", "assets/images/Scale9_WhiteRounded_01.png");
// 		game.load.image("tutorial1", "assets/images/Tutorial_Runner_01.jpg");
// 		game.load.image("tutorial2", "assets/images/Tutorial_Runner_02.jpg");
// 		game.load.image("tutorial3", "assets/images/Tutorial_Runner_03.jpg");
// 		game.load.json("patterns", "assets/spawnPatterns.json");
// 		game.load.atlas(
// 			"playerAtlas",
// 			"assets/images/playerAtlas.png",
// 			"assets/playerAtlas.json"
// 		);
// 		game.load.image("background", "assets/images/Bg_Space_00.png");
// 		game.load.image("bgStars", "assets/images/Bg_Stars_00_8.png");
// 		game.load.image("bgSpeedStars", "assets/images/Bg_Stars_Blurred.png");
// 		game.load.image("nebula1", "assets/images/nebula_1_blue.png");
// 		game.load.image("nebula2", "assets/images/nebula_1_red.png");
// 		game.load.image("nebula3", "assets/images/nebula_2_blue.png");
// 		game.load.image("nebula4", "assets/images/nebula_2_red.png");
// 		game.load.image("shield", "assets/images/Shield_00.png");
// 		game.load.image("hurdle", "assets/images/Hurdle_00.png");
// 		game.load.image("star", "js/mod/Star_00.png");
// 		game.load.spritesheet(
// 			"closeButton",
// 			"assets/images/GS_close_spritesheet.png",
// 			400,
// 			150,
// 			3
// 		);
// 		game.load.image("scoreContainer", "assets/images/GS_END_container.png");
// 		game.load.image(
// 			"topScoresContainer",
// 			"assets/images/GS_END_topscoresContainer.png"
// 		);
// 		game.load.image("scoreImage", "assets/images/GS_END_yourScore.png");
// 		game.load.image("overLay", "assets/images/TITLE_OVERLAY.png");
// 		game.load.image("meterBG", "assets/images/UI_bar_empty_00.png");
// 		game.load.image("meterFill", "assets/images/UI_bar_full_00.png");
// 		game.load.image("meterIcon", "js/mod/UI_playericon_00.png");
// 		game.load.spritesheet(
// 			"superstar",
// 			"js/mod/SuperStar_spritesheet.png",
// 			120,
// 			120,
// 			6
// 		);
// 		game.load.image(
// 			"yourScoreBorder",
// 			"assets/images/GS_END_topscoresContainer_highlight.png"
// 		);
// 		game.load.image("gate", "assets/images/gate.png");
// 		game.load.image("magnet", "assets/images/Magnet_00.png");
// 		game.load.image("multiplier", "assets/images/Multiplier_00.png");
// 		game.load.image("impervious", "assets/images/Impervious_00.png");
// 		game.load.image("speedboost", "assets/images/SpeedBoost_00.png");
// 		game.load.spritesheet(
// 			"hurdleBreak",
// 			"assets/images/Hurdle_spritesheet.png",
// 			200,
// 			237,
// 			4
// 		);

// 		// overriding sounds - in the future this should be loaded from the mod file, not directly from the server
// 		game.load.audio("click", "js/mod/Beep.wav");
// 		game.load.audio("jump", "js/mod/Jump.wav");
// 		game.load.audio("star", "js/mod/Coin.wav");
// 		game.load.audio("superstar", "js/mod/Coin.wav");
// 		game.load.audio("obstacle", "js/mod/Bump.wav");
// 		game.load.audio("powerup1", "js/mod/Powerup.wav");
// 		game.load.audio("powerup2", "js/mod/Powerup.wav");
// 		game.load.audio("powerup3", "js/mod/Powerup.wav");
// 		game.load.audio("music", "js/mod/575279_Praise-The-Sun-420Yolo.mp3");

// 		hasLoaded = true;
// 	} else {
// 		startState.postCreate();
// 	}
// };

initializedProperly = true;
