function getWinrateColor(value) {

value = parseFloat(value.replace("%", ""))

const SLIDER_COLORS = [
{ val: 56.0, color: "#1A5800"},
{ val: 54.5, color: "#2D5A00"},
{ val: 53.0, color: "#415C00"},

{ val: 51.5, color: "#545E00"},
{ val: 50.0, color: "#676000"},
{ val: 48.5, color: "#674F00"},

{ val: 47.0, color: "#673F00"},
{ val: 45.5, color: "#672E00"},
{ val: 44.0, color: "#671D00"},
]

for (let i = 0; i < 9; i++) {
  if (value > SLIDER_COLORS[i].val) {
  return SLIDER_COLORS[i].color
  }
  }
  return "#671D00"
}

function getPickOrderColor(value) {

value = parseFloat(value)

const SLIDER_COLORS = [
{ val: 4.0, color: "#1A5800"},
{ val: 8.0, color: "#2D5A00"},
{ val: 12.0, color: "#415C00"},

{ val: 16.0, color: "#545E00"},
{ val: 20.0, color: "#676000"},
{ val: 24.0, color: "#674F00"},

{ val: 28.0, color: "#673F00"},
{ val: 32.0, color: "#672E00"},
{ val: 36.0, color: "#671D00"},
]

for (let i = 0; i < 9; i++) {
  if (value < SLIDER_COLORS[i].val) {
  return SLIDER_COLORS[i].color
  }
  }
  return "#671D00"
}


$(document).ready(function() {
        $(sortTable).DataTable(
    {
        "paging": false,
        responsive: true,
        oSearch: {"bRegex": true, "bSmart": false},
        "columnDefs": [{ "searchable": false, "targets": [0,2,3,4,5,6,7]},
        { targets: [1], visible: false},
        { targets: [0], className: "smaller-font"}],
        rowCallback: function(row, data, index)
        {
            $(row).find("td:eq(1)").css({"background-color" : getWinrateColor(data[2]), "color" : "#FFFFFF"});
            $(row).find("td:eq(2)").css({"background-color" : getWinrateColor(data[3]), "color" : "#FFFFFF"});
            $(row).find("td:eq(3)").css({"background-color" : getWinrateColor(data[4]), "color" : "#FFFFFF"});
            $(row).find("td:eq(4)").css({"background-color" : getWinrateColor(data[5]), "color" : "#FFFFFF"});
            $(row).find("td:eq(5)").css({"background-color" : getWinrateColor(data[6]), "color" : "#FFFFFF"});
            $(row).find("td:eq(6)").css({"background-color" : getWinrateColor(data[7]), "color" : "#FFFFFF"});
            console.log("Hehe.");
        }
        });

     $("#sortTable").on("click", "td.removable", function () {
		var table = $("#sortTable").DataTable();
		table
			.row($(this))
			.remove()
		.draw();
		});
});