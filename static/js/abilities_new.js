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
{ val: 6.0, color: "#D02F70"},
{ val: 12.0, color: "#A12869"},
{ val: 18.0, color: "#722162"},

{ val: 24.0, color: "#421A5A"},
{ val: 30.0, color: "#131353"}
]

for (let i = 0; i < 5; i++) {
  if (value < SLIDER_COLORS[i].val) {
  return SLIDER_COLORS[i].color
  }
  }
  return "#0f0f57"
}


$(document).ready(function() {
    $(sortTable).DataTable(
        {
            "paging": false,
            "order": [[ 8, "asc" ]],
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
                $(row).find("td:eq(7)").css({"background-color" : getPickOrderColor(data[8]), "color" : "#FFFFFF"});
            }
        });
    $(comboTable).DataTable(
        {
            "paging": false,
            "order": [[ 6, "desc" ]],
            responsive: true,
            oSearch: {"bRegex": true, "bSmart": false},
            "columnDefs": [{ "searchable": false, "targets": [0,2,3,5,6]},
            { targets: [1, 4], visible: true},],
            rowCallback: function(row, data, index)
            {
                $(row).find("td:eq(2)").css({"background-color" : getWinrateColor(data[2]), "color" : "#FFFFFF"});
                $(row).find("td:eq(5)").css({"background-color" : getWinrateColor(data[5]), "color" : "#FFFFFF"});
                $(row).find("td:eq(6)").css({"background-color" : getWinrateColor(data[6]), "color" : "#FFFFFF"});
            }
        });

     var lastRun = null;
     $("#sortTable").on("click", "td.removable", function () {
        if (lastRun == null || new Date() - lastRun > 500) {
        var table = $("#sortTable").DataTable();
		table
			.row($(this))
			.remove()
		.draw();
		lastRun = new Date(); }
		});
	$("#comboTable").on("click", "td", function () {
	    var $searchBox = document.getElementsByClassName("form-control form-control-sm")[1];
	    var table = $("#comboTable").DataTable();
	    console.log("ComboTable onclick");
	    $('#comboTable tbody>tr').each(function() {
            var firstHero = $(this).find('td:nth-child(2)').html()
            var secondHero = $(this).find('td:nth-child(5)').html();
            if (!($searchBox.value.includes(firstHero)) || !($searchBox.value.includes(secondHero)))
            {
                $(this).hide();
            }
            console.log(firstHero, secondHero);
        });
		});
});