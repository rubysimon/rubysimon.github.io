	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
//function myFunction() {
 //   var x = document.getElementById("secondpage");
 //   if (x.className === "topnav") {
 //       x.className += " responsive";
 //   } else {
 //       x.className = "topnav";
 //   }
//}
	
	function myFunction() {		
	var words = document.getElementById("pic");
	if (words.src == "ruby.jpg"){
			words.src = "ruby2.jpg";}
		else  {
			words.src = "ruby.jpg";
		}
	}
