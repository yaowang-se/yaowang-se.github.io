var aside = document.querySelector("link[rel = 'import_aside']").import;
var con_aside = aside.querySelector("div");
document.querySelector("#aside").appendChild(con_aside.cloneNode(true));

var clone_aside = document.importNode(con_aside,true)
document.querySelector("#aside").appendChild(clone_aside)
