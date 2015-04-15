var gold = 0, workers = 0;

function goldClick(x) {
    gold = gold + x;
    $("#goldCount").text(gold);
};

function buyWorker() {
	var workerCost = Math.floor(10 * Math.pow(1.1, workers));
	if (gold >= workerCost) {
		workers = workers + 1;
		gold = gold - workerCost;
		$("#goldCount").text(gold);
		$("#workerCount").text(workers);
	};
	var nextCost = Math.floor(10 * Math.pow(1.1, workers));
	$("#workerCost").text(nextCost);
}