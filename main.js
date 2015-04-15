var kingdom;

$(document).ready(function(){
	try {
		kingdom = JSON.parse(localStorage.getItem("save"));
		goldClick(kingdom.workers);
	}
	catch(err) {
		kingdom = initialKingdom();
	}
	refreshPage();
});

window.setInterval(function(){
	goldClick(kingdom.workers);
	goldClick(kingdom.workhouses * 5);
	saveGame();
}, 1000);

function initialKingdom() {
	return {
	gold: 0, 
	workers: 0,
	workhouses: 0
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
	$("#workhouseCount").text(kingdom.workhouses);

	//Costs
	$("#workerCost").text(costWorkers());
	$("#workhouseCost").text(costWorkhouse());
};