function f_wideWidth() {
  var x1;

  x1 = document.getElementById("wideWidth").value;

  if (isNaN(x1)) {
    document.getElementById("demo1").innerHTML = "Input not valid";
  }
  else {
      document.getElementById("wideCam").setAttribute("width", x1);     document.getElementById("demo1").innerHTML = "Width adjusted";
      
  }
}

function f_wideHeight() {
  var x2;

  x2 = document.getElementById("wideHeight").value;

  if (isNaN(x2)) {
    document.getElementById("demo2").innerHTML = "Input not valid";
  }
  else {
      document.getElementById("demo2").innerHTML = "Height adjusted";
      document.getElementById("wideCam").setAttribute("height", x2);
  }
  
}

function f_regularWidth() {
  var x3;

  x3 = document.getElementById("regularWidth").value;

  if (isNaN(x3)) {
    document.getElementById("demo3").innerHTML = "Input not valid";
  } 
  else {
      document.getElementById("demo3").innerHTML = "Width adjusted";
      document.getElementById("regularCam").setAttribute("width", x3);
  }
}

function f_regularHeight() {
  var x4;

  x4 = document.getElementById("regularHeight").value;

  if (isNaN(x4)) {
    document.getElementById("demo4").innerHTML = "Input not valid";
  }
  else {
      document.getElementById("demo4").innerHTML = "Height adjusted";
      document.getElementById("regularCam").setAttribute("height", x4);
  }
}