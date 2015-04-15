var kingdom;

$(document).ready(function(){
	var save = JSON.parse(localStorage.getItem("save"));
	if (typeof save === "undefined") {
		kingdom = initialKingdom();
	} else {
		loadGame();
	}
	refreshPage();
});

window.setInterval(function(){
	goldClick(kingdom.workers);
	saveGame();
}, 1000);

function initialKingdom() {
	return {
	gold: 0, 
	workers: 0
	}
};

function saveGame() {
	localStorage.setItem("save", JSON.stringify(kingdom));
};

function loadGame() {
	var save = JSON.parse(localStorage.getItem("save"));
	if (typeof save !== "undefined") kingdom = save;
	refreshPage();
};

function deleteGame() {
	localStorage.removeItem("save");
	kingdom = initialKingdom();
	saveGame();
	refreshPage();
};

function goldClick(x) {
    kingdom.gold = kingdom.gold + x;
    refreshPage();
};

function refreshPage() {
	//Kindgom Attributes
	$("#goldCount").text(kingdom.gold);
	$("#workerCount").text(kingdom.workers);

	//Costs
	$("#workerCost").text(costWorkers());
};