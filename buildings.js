function costWorkers() {
	return Math.floor(10 * Math.pow(1.2, kingdom.workers));
}

function buyWorker() {
	if (kingdom.gold >= costWorkers()) {
		kingdom.workers = kingdom.workers + 1;
		kingdom.gold = kingdom.gold - costWorkers();
	};
	$("#workerCost").text(costWorkers());
	refreshPage();
};