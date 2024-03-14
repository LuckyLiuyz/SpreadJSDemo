window.onload = function () {
	var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
	initSpread(spread);
};

function initSpread(spread) {
	var spreadNS = GC.Spread.Sheets;

	var sheet = spread.getSheet(0);
	sheet.suspendPaint();
	var customFloatingObject = new spreadNS.FloatingObjects.FloatingObject(
		"f1",
		10,
		10,
		60,
		64
	);
	customFloatingObject.startRow(1);
	customFloatingObject.startColumn(1);
	customFloatingObject.endColumn(3);
	customFloatingObject.endRow(4);
	var btn = document.createElement("button");
	btn.style.width = "125px";
	btn.style.height = "60px";
	btn.style.background = "#82bc00";
	btn.style.color = "white";
	btn.style.textAlign = "center";
	btn.style.border = "none";
	btn.innerText = "Button";
	customFloatingObject.content(btn);
	sheet.floatingObjects.add(customFloatingObject);
	sheet.resumePaint();

	var floatingObjectEvent = document.getElementById("floatingObjectEvent");

	sheet.bind(
		spreadNS.Events.FloatingObjectSelectionChanged,
		function (e, args) {
			var text = floatingObjectEvent.value;
			if (text !== "") {
				text += "\n";
			}
			floatingObjectEvent.value =
				text +
				"\n" +
				"Event:FloatingObjectSelectionChanged" +
				"\n" +
				"FloatingObject " +
				args.floatingObject.name() +
				"\n";
		}
	);
	sheet.bind(spreadNS.Events.FloatingObjectChanged, function (e, args) {
		var text = floatingObjectEvent.value;
		if (text !== "") {
			text += "\n";
		}
		floatingObjectEvent.value =
			text +
			"Event:FloatingObjectChanged" +
			"\n" +
			"FloatingObject " +
			args.floatingObject.name() +
			" " +
			args.propertyName +
			"\n";
	});
}
