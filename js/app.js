function r(w){
  var x = "";
  for (var i = w.length -1 ; i >= 0 ; i--){
    x = x.concat(x[i]);
  }
  return x;
}
//inline function expertion
 function a(n,m){
   n(m);
 }
 a(function (s){
   console.log("make" + s);
 }, "here");
//another
function d(f, g) {
  f(g);
}
 var a = function b(c) {
   console.log("make" + c);
 };
d(a, "here");

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
