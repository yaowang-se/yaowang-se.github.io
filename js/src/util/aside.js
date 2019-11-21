var post1 = document.querySelector("link[rel = 'import']").import;
var con1 = post1.querySelector("div");
document.querySelector("#sidebar").appendChild(con1.cloneNode(true));

var clone1 = document.importNode(con1,true)
document.querySelector("#sidebar").appendChild(clone1)
