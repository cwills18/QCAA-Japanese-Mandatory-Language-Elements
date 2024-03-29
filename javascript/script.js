function toMainMenu() {
	window.location.href = "./../index.html";
}

const backToHomeButton = document.querySelector(".backToHome");
backToHomeButton.addEventListener("click", toMainMenu);

function loadSortQueries() {
	const englishSort = document.querySelectorAll(".header-item__sort-btn--english");
	englishSort.forEach((x) =>
		x.addEventListener("click", function () {
			sortTableAlphabetically("english", 0);
		})
	);
	const hiraganaSort = document.querySelectorAll(".header-item__sort-btn--hiragana");
	hiraganaSort.forEach((x) =>
		x.addEventListener("click", function () {
			sortTableAlphabetically("hiragana", 1);
		})
	);
}

//Since the table loads with English already in alphabetical order,
//the default value to sort for English will be reverse. The following
//variable will store which way the list needs to filter next
//(opposite of last applied). The variable will be updated each time
//the sortTableEnglish function runs, so that it is ready for the next sort.
let englishSortToggle = "za";
//the default for hiragana will be to sort alphabetically, since it will not be in alphabetical order once it loads
let hiraganaSortToggle = "az";

//a function that will sort tables alphabetically or reverse alphabetically by column, you pass the id of the
//table in, the name of the column,  and the columnNumber (first column being 0).
function sortTableAlphabetically(columnName, columnNumber) {
	//note: due to slowness on large tables - should look into adding a "loading" notice
	const tableOptions = document.querySelectorAll(".vocab-table");
	let table;
	if (tableOptions.length > 1) {
		table = tableOptions[1];
	} else {
		table = tableOptions[0];
	}
	let toggle, rows, shouldSwitch, i, x, y;
	switch (columnName) {
		case "hiragana":
			toggle = hiraganaSortToggle;
			if (hiraganaSortToggle === "az") {
				hiraganaSortToggle = "za";
			} else {
				hiraganaSortToggle = "az";
			}
			break;
		case "english":
		default:
			toggle = englishSortToggle;
			if (englishSortToggle === "za") {
				englishSortToggle = "az";
			} else {
				englishSortToggle = "za";
			}
			break;
	}
	let switching = true;
	rows = table.rows;
	while (switching) {
		switching = false;
		for (i = 1; i < rows.length - 1; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[columnNumber];
			y = rows[i + 1].getElementsByTagName("TD")[columnNumber];
			if (toggle === "az") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
			if (toggle === "za") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

loadSortQueries();
