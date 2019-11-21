var aside = document.querySelector("link[rel = 'hello']").import;
var con_aside = aside.querySelector("div");
document.querySelector("#sidebar").appendChild(con_aside.cloneNode(true));

var clone_aside = document.importNode(con_aside,true)
document.querySelector("#sidebar").appendChild(clone_aside)
