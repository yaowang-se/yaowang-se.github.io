var post = document.querySelector("link[rel = 'import']").import;
var con = post.querySelector("div");
document.querySelector("#sidebar").appendChild(con.cloneNode(true));

var clone = document.importNode(con,true)
document.querySelector("#sidebar").appendChild(clone)