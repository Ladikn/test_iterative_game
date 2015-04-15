var kingdom = {
	gold: 0, 
	workers: 0
}

window.setInterval(function(){
	goldClick(kingdom.workers);
}, 1000);

function saveGame() {
	localStorage.setItem("save", JSON.stringify(kingdom));
	alert("Game Saved");
}

function loadGame() {
	var save = JSON.parse(localStorage.getItem("save"));
	if (typeof save !== "undefined") kingdom = save;
	refreshPage();
}

function goldClick(x) {
    kingdom.gold = kingdom.gold + x;
    refreshPage();
};

function buyWorker() {
	var workerCost = Math.floor(10 * Math.pow(1.1, kingdom.workers));
	if (kingdom.gold >= workerCost) {
		kingdom.workers = kingdom.workers + 1;
		kingdom.gold = kingdom.gold - workerCost;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1, kingdom.workers));
	$("#workerCost").text(nextCost);
	refreshPage();
};

function refreshPage() {
	//Kindgom Attributes
	$("#goldCount").text(kingdom.gold);
	$("#workerCount").text(kingdom.workers);

	//Costs
	$("#workerCost").text(Math.floor(10 * Math.pow(1.1, kingdom.workers)));
}