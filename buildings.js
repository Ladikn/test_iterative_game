function costWorkers() {
	return Math.floor(10 * Math.pow(1.2, kingdom.workers));
}

function buyWorker() {
	if (kingdom.gold >= costWorkers()) {
		kingdom.gold = kingdom.gold - costWorkers();
		kingdom.workers = kingdom.workers + 1;
	};
	$("#workerCost").text(costWorkers());
	refreshPage();
};

function costWorkhouse() {
	return Math.floor(100 * Math.pow(1.2, kingdom.workhouses));
}

function buyWorkhouse() {
	if (kingdom.gold >= costWorkhouse()) {
		kingdom.gold = kingdom.gold - costWorkhouse();
		kingdom.workhouses = kingdom.workhouses + 1;
	};
	$("#workhousesCost").text(costWorkhouse());
	refreshPage();
}