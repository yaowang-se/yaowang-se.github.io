var aside = document.querySelector("link[rel = 'hello']").import;
var con_aside = aside.querySelector("section");
document.querySelector("#test").appendChild(con_aside.cloneNode(true));

var clone_aside = document.importNode(con_aside,true)
document.querySelector("#test").appendChild(clone_aside)
