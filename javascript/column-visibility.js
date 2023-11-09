var columnVisibility = [
	[0, true],
	[1, true],
	[2, true],
	[3, true],
	[4, true],
	[5, true],
	[6, true],
];

const vocabTable = document.querySelector(".vocab-table");
const vocabTableRows = vocabTable.rows;
const filteredTable = document.querySelector(".filtered-vocab-table");
const colVisibilityOptions = document.querySelector(".visible-col-dropdown--expanded");
const upCaret = document.querySelector(".visible-col-dropdown__icon--up");
const downCaret = document.querySelector(".visible-col-dropdown__icon--down");

function configureExistingCols() {
	for (let i = 0; i < vocabTableRows.length; i++) {
		let row = vocabTableRows[i];
		let cells = row.children;
		//make sure any non-existing columns are not marked as visible
		for (let i = cells.length; i < 7; i++) {
			columnVisibility[i][1] = null;
		}
	}
}

function toggleVisibility(columnNum) {
	configureExistingCols();
	columnVisibility[columnNum][1] = !columnVisibility[columnNum][1];
	loadFilteredVocabTable();
	loadSortQueries();
}

function loadFilteredVocabTable() {
	refreshTable();
	let newTable = vocabTable.cloneNode(true);
	hiddenCols = columnVisibility.filter((x) => x[1] === false);
	let rows = newTable.rows;
	for (let i = 0; i < rows.length; i++) {
		let row = rows[i];
		let cells = row.children;
		for (let j = 0; j < hiddenCols.length; j++) {
			let targetCell = cells[hiddenCols[j][0]];
			targetCell.style.display = "none";
		}
	}
	vocabTable.style.display = "none";
	filteredTable.appendChild(newTable);
}

function refreshTable() {
	removePreviousFilteredTables();
	vocabTable.style.display = "block";
}

function removePreviousFilteredTables() {
	if (filteredTable.hasChildNodes()) {
		let child = filteredTable.firstChild;
		filteredTable.removeChild(child);
	}
}

function showCustomiseColumns() {
	colVisibilityOptions.style.display = "flex";
	upCaret.style.display = "inline-block";
	downCaret.style.display = "none";
}

function hideCustomiseColumns() {
	colVisibilityOptions.style.display = "none";
	downCaret.style.display = "inline-block";
	upCaret.style.display = "none";
}

function fixBrokenFontAwesomeIcon() {
	upCaret.style.display = "none";
}

fixBrokenFontAwesomeIcon();
