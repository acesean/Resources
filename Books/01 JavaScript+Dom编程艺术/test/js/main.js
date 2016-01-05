
// V1.0 start
//function showPic(whichpic) {
//    var source = whichpic.getAttribute("href");
//    var placeholder = document.getElementById("placeholder");
//    placeholder.setAttribute("src", source);
//    var text = whichpic.getAttribute("title");
//    var description = document.getElementById("description");
//    //description.firstChild.nodeValue = text;
//    description.innerHTML = text;
//}

// V2.0 start
//function addLoadEvent(func) {
//    var oldonload = window.onload;
//    if (typeof window.onload != 'function') {
//        window.onload = func;
//    }
//    else {
//        window.onload = function () {
//            oldonload();
//            func();
//        }
//    }
//}
window.onload = function () {
    prepareGallery();
}

function prepareGallery() {
    //if (!document.getElementsByTagName) return false;
    //if (!document.getElementById) return false;
    //if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclcik = function () {
            return showPic(this);
        }
    }
}

function showPic(whichpic) {
    //if (!document.getElementById("placeholder")) return true;
    //var source = whichpic.href;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    //if (placeholder.nodeName != "IMG") return true;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title") ?
    whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}