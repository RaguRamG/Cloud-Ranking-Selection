var p1 ,p2, p3 , p4 , p5,  p6 , p7,  p8,  p9,  p10;
var active = 0;
var it;
$(document).ready(function(){
    
    function drawTable(data) {
        //alert(data.length);
        for (var i = 0; i < data.length; i++) {
            it = i;
            drawRow(data[i]);
        }
    }

    function drawRow(rowData) {
        var row = $("<tr />")
        $("#personDataTable").append(row); 
        if(it == 0){
            row.append($("<th>" + rowData["SID"] + "</th>"));
            row.append($("<th>" + rowData["Cloud Provider"] + "</th>"));
            row.append($("<th>" + rowData["Service Name"] + "</th>"));
            
            if( p1 ){
                row.append($("<th>" + rowData["Security"] + "</th>"));
            }if( p2 ){
                row.append($("<th>" + rowData["Availability"] + "</th>"));
            }if( p3 ){
                row.append($("<th>" + rowData["Base Plan Price"] + "</th>"));
            }if( p4 ){
                row.append($("<th>" + rowData["Cost per month"] + "</th>"));
            }if( p5 ){
                row.append($("<th>" + rowData["RAM"] + "</th>"));
            }if( p6 ){
                row.append($("<th>" + rowData["Disk Space"] + "</th>"));
            }if( p7 ){
                row.append($("<th>" + rowData["Service Credit"] + "</th>"));
            }if( p8 ){
                row.append($("<th>" + rowData["Bandwidth"] + "</th>"));
            }if( p9 ){
                row.append($("<th>" + rowData["Processor Speed"] + "</th>"));
            }if( p10 ){
                row.append($("<th>" + rowData["Virtual CPU Cores"] + "</th>"));
            }
        }
        else{
            row.append($("<td>" + rowData["SID"] + "</td>"));
            row.append($("<td>" + rowData["Cloud Provider"] + "</td>"));
            row.append($("<td>" + rowData["Service Name"] + "</td>"));
            
            if( p1 ){
                row.append($("<td>" + rowData["Security"] + "</td>"));
            }if( p2 ){
                row.append($("<td>" + rowData["Availability"] + "</td>"));
            }if( p3 ){
                row.append($("<td>" + rowData["Base Plan Price"] + "</td>"));
            }if( p4 ){
                row.append($("<td>" + rowData["Cost per month"] + "</td>"));
            }if( p5 ){
                row.append($("<td>" + rowData["RAM"] + "</td>"));
            }if( p6 ){
                row.append($("<td>" + rowData["Disk Space"] + "</td>"));
            }if( p7 ){
                row.append($("<td>" + rowData["Service Credit"] + "</td>"));
            }if( p8 ){
                row.append($("<td>" + rowData["Bandwidth"] + "</td>"));
            }if( p9 ){
                row.append($("<td>" + rowData["Processor Speed"] + "</td>"));
            }if( p10 ){
                row.append($("<td>" + rowData["Virtual CPU Cores"] + "</td>"));
            }
        }
    }
    $("#sla").click(function(){
        active = 0; 
        $('.param').attr('checked', false);
        $(this).addClass('active');
        $("#rank").removeClass('active');
        $("#personDataTable").empty();
    });
    $("#rank").click(function(){
        active = 1; 
        $('.param').attr('checked', false);
        $(this).addClass('active');
        $("#sla").removeClass('active');
        $("#personDataTable").empty();
    });
    
    $(".param").click(function(){ 
        p1 = $("#p1").is(':checked') ? 1 : 0;
        p2 = $("#p2").is(':checked') ? 1 : 0;
        p3 = $("#p3").is(':checked') ? 1 : 0;
        p4 = $("#p4").is(':checked') ? 1 : 0;
        p5 = $("#p5").is(':checked') ? 1 : 0;
        p6 = $("#p6").is(':checked') ? 1 : 0;
        p7 = $("#p7").is(':checked') ? 1 : 0;
        p8 = $("#p8").is(':checked') ? 1 : 0;
        p9 = $("#p9").is(':checked') ? 1 : 0;
        p10 = $("#p10").is(':checked') ? 1 : 0; 
        if(active == 0){
           $.ajax({
                        type: "POST",
                        url: "python/sla.cgi",//"perl/hello.cgi",
                        async : "true",
                        data : { 'p1' : p1 , 'p2' : p2 , 'p3' : p3 , 'p4' : p4 , 'p5' : p5 , 'p6' : p6,'p7' : p7,'p8' : p8,'p9' : p9,'p10' : p10 },
                        dataType : 'json',
                        success: function(result) {
                            $("#personDataTable").empty();
                            //alert(result);
                            drawTable(result);
                          }
                });
        }
        else if(active == 1){
            $.ajax({
                        type: "POST",
                        url: "python/ranktable.cgi",//"perl/hello.cgi",
                        async : "true",
                        data : { 'p1' : p1 , 'p2' : p2 , 'p3' : p3 , 'p4' : p4 , 'p5' : p5 , 'p6' : p6,'p7' : p7,'p8' : p8,'p9' : p9,'p10' : p10 },
                        dataType : 'json',
                        success: function(result) {
                            $("#personDataTable").empty();
                            //alert(result);
                            drawTable(result);
                          }
                });
        
        }
        });



        $("#update").click(function(){
                $("#loading").show();
                $.ajax({
                        type: "POST",
                        url: "python/extract.cgi",//"perl/hello.cgi",
                        async : "true",
                       
                        success: function(result) {
                            $('#myModal').modal('show');
                            $("#loading").hide();
                         //   $("#personDataTable").empty();
                            //alert(result);
                           // drawTable(result);
                          }
                });
        });
});