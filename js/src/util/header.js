var post = document.querySelector("link[rel = 'import']").import;
var con = post.querySelector("div");
document.querySelector("#app").appendChild(con.cloneNode(true));

var clone = document.importNode(con,true)
document.querySelector("#app").appendChild(clone)
