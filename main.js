function miSerie() {
	var i, j, N;
  	N = document.getElementById("Num").value;
  	document.write("<table border='1'>");
	for(i = 0; i < N; i++){
		document.write("<tr>");
		for(j = 0; j <= i; j++){
			document.write("<td><h1>" + (i + 1) + "</h1></td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}
function miSerie2() {
	var i, j, N;
  	N = document.getElementById("Num").value;
  	document.write("<h1>");
	for(i = 0; i < N; i++){
		for(j = 0; j <= i; j++){
			document.write((i + 1) + ", ");
		}
	}
	document.write("</h1>");
}