function doMouseOverpp() {

    document.getElementById("paypal").src = "pprollover.png";

}

function doMouseOutpp() {

    document.getElementById("paypal").src = "paypal.png";

}

function doMouseOverg() {

    document.getElementById("google").src = "googrollover.png";

}

function doMouseOutg() {

    document.getElementById("google").src = "google_2.png";

}

function doMouseOvercp() {

    document.getElementById("classpass").src = "cprollover.png";

}

function doMouseOutcp() {

    document.getElementById("classpass").src = "classpass.png";

}

function doMouseOverm() {

    document.getElementById("mosaic").src = "mosrollover.png";

}

function doMouseOutm() {

    document.getElementById("mosaic").src = "mosaic.png";

}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}