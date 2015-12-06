

$(document).ready(function(){
//the variable to be appended here
$("#Autom").append("<ul></ul>");
});
$.ajax({
type: "GET",
url: "nutrition.xml",
dataType: "xml",
success: function(xml) {
}
$(xml).find('daily-values').each(function(){
var total-fat = $(this).find('total-fat').text();
var saturated-fat = $(this).find('saturated-fat').text();
$("<li></li>").html(total-fat + "-" + saturated-fat).appendTo("#Autom ul");
});
error: function() {
alert("The XML File could not be processed correctly.");
}
});

// $(document).ready(function(){
//   $("#loadBtn").click(function(){
//     $.ajax({
//       type: "GET",
//       url: "nutrition.xml",
//       error: function(jqXHR, textStatus, errorThrown) {
// 				console.log('Error: ' + errorThrown);
// 			},
//       success: function(xml) {
// 				console.log('AJAX Request is succeded.');
//         var nutritionTable = '';
//   				nutritionTable += '<table id="nutritionTable"
//                          cellspacing="0" cellpadding="2" border="1">' ;
//
//   				nutritionTable += '<thead>Nutrition Facts<td>Id</td>
//                          <td>Name</td><td>Price</td><td>Discount</td></thead>';
//                          nutritionTable += '<thead><td>Id</td>
//                                       <td>Name</td><td>Price</td><td>Discount</td></thead>';
//
//                				$(xml).find('nutrition').each(function(){
//                					nutritionTable += '<tr>';
//                					nutritionTable += '<td>';
//                					nutritionTable += $(this).find('id').text();
//                					nutritionTable += '</td>';
//
//                					productsTable += '<td>';
//                					productsTable += $(this).find('name').text();
//                					productsTable += '</td>';
//
//                					productsTable += '<td>';
//                					productsTable += $(this).find('price').text();
//                					productsTable += '</td>';
//
//                					productsTable += '<td>';
//                					productsTable += $(this).find('discount').text();
//                					productsTable += '</td>';
//
//                					productsTable += '</tr>';
//                				});
//                				productsTable += '</table>';
//                				$("#products").append(productsTable);
//                			}
//
//     });
//   });
// });


// <script>
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       myFunction(xhttp);
//     }
//   };
//   xhttp.open("GET", "nutrition.xml", true);
//   xhttp.send();
// }
// function myFunction(xml) {
//   var i;
//   var xmlDoc = xml.responseXML;
//   var table="<tbody><thead>NUTRITION FACTS<tr><th>Artist</th><th>Title</th></tr></thead></tbody>";
//   var x = xmlDoc.getElementsByTagName("daily-values");
//   for (i = 0; i <x.length; i++) {
//     table += "<tr><td>" +
//     x[i].getElementsByTagName("total-fat ")[0].childNodes[0].nodeValue +
//     "</td><td>" +
//     x[i].getElementsByTagName("saturated-fat")[0].childNodes[0].nodeValue +
//     "</td><td>" +
//     x[i].getElementsByTagName("cholesterol")[0].childNodes[0].nodeValue +
//     "</td><td>" +
//     x[i].getElementsByTagName("sodium")[0].childNodes[0].nodeValue +
//     "</td></tr>";
//   }
//   document.getElementById("demo").innerHTML = table;
// }
//
// </script>
