console.log('this javascript only works in mainweb.html')

function gebid (id) {
    return document.getElementById(id)
}

const menu = gebid('menu')
const mymenu = gebid('myMenu')
mymenu.style.display = "none";

function showclose () {
    mymenu.style.display = mymenu.style.display === "none"? "block" : "none"
    console.log('hiebciusviswghhf')
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }