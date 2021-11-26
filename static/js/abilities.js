$(document).ready(function() {
        $(sortTable).DataTable(
    {
        "paging": false,
        responsive: true,
        oSearch: {"bRegex": true},
        "columnDefs": [{ "searchable": false, "targets": [0,2,3,4,5,6,7]},
        { targets: [1], visible: false},
        { targets: [0,1,3,5,7,9,11], className: "smaller-font"}],
        rowCallback: function(row, data, index)
        {
            if(data[2] < 49.5){
                $(row).find("td:eq(1)").css("color", "red");
            }
            if(data[2] > 50.5){
                $(row).find("td:eq(1)").css("color", "green");
            }
            if(data[2] > 51.5){
                $(row).find("td:eq(1)").css("font-weight", "bold");
            }
            if(data[4] < 49.5){
                $(row).find("td:eq(3)").css("color", "red");
            }
            if(data[4] > 50.5){
                $(row).find("td:eq(3)").css("color", "green");
            }
            if(data[4] > 51.5){
                $(row).find("td:eq(3)").css("font-weight", "bold");
            }
            if(data[6] < 49.5){
                $(row).find("td:eq(5)").css("color", "red");
            }
            if(data[6] > 50.5){
                $(row).find("td:eq(5)").css("color", "green");
            }
            if(data[6] > 51.5){
                $(row).find("td:eq(5)").css("font-weight", "bold");
            }
            if(data[8] < 49.5){
                $(row).find("td:eq(7)").css("color", "red");
            }
            if(data[8] > 50.5){
                $(row).find("td:eq(7)").css("color", "green");
            }
            if(data[8] > 51.5){
                $(row).find("td:eq(7)").css("font-weight", "bold");
            }
            if(data[10] < 49.5){
                $(row).find("td:eq(9)").css("color", "red");
            }
            if(data[10] > 50.5){
                $(row).find("td:eq(9)").css("color", "green");
            }
            if(data[10] > 51.5){
                $(row).find("td:eq(9)").css("font-weight", "bold");
            }
        }
        });

     $("#sortTable").on("click", "tr", function () {
		var table = $("#sortTable").DataTable();
		table
			.row($(this))
			.remove()
		.draw();
		});
});