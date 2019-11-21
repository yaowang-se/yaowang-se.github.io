var post = document.querySelector("link[rel = 'import']").import;
var con = post.querySelector("div");
document.querySelector("#common").appendChild(con.cloneNode(true));

var clone = document.importNode(con,true)
document.querySelector("#common").appendChild(clone)
