"use strict";

var Imagecount = 1;
var total = 3;

function slide(x){
	var Image = document.getElementById("img");
	Imagecount = Imagecount + x;
	if(Imagecount > total){Imagecount = 1;}
	if (Imagecount < 1) {Imagecount = total}
	Image.src = "images/img" + Imagecount + ".jpg";

}

window.setInterval(function slideA(){
	var Image = document.getElementById("img");
	Imagecount = Imagecount + 1;
	if(Imagecount > total){Imagecount = 1;}
	if (Imagecount < 1) {Imagecount = total}
	Image.src = "images/img" + Imagecount + ".jpg";

},3500);