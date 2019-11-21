var post_aside = document.querySelector("link[rel = 'import_aside']").import;
var con_aside = post_aside.querySelector("div");
document.querySelector("#sidebar").appendChild(con_aside.cloneNode(true));

var clone_aside = document.importNode(con_aside,true)
document.querySelector("#sidebar").appendChild(clone_aside)
