const sideMenu = document.getElementById('sideMenu');
const sideMenuContainer = document.getElementById('sideMenuContainer');

function sideMenuOnClick() {
    sideMenuContainer.style.transform = 'translate(-100%,0%)';

}

function sideMenuButtonOnClick() {
    sideMenuContainer.style.transform = 'translate(0%, 0%)';

}

let images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg", "images/food9.jpg"]
let var1 = 1,
    var2 = 2,
    var3 = 3,
    imagesNum = 0;
box = "box";


function carouselRight() {
    document.getElementById("box" + var1).style.width = "60%";
    document.getElementById("box" + var1).style.left = "20%";
    document.getElementById("box" + var1).style.top = "20%";
    document.getElementById("box" + var1).style.zIndex = "9";

    document.getElementById("box" + var2).style.width = "50%";
    document.getElementById("box" + var2).style.left = "50%";
    document.getElementById("box" + var2).style.top = "25%";
    document.getElementById("box" + var2).style.zIndex = "7";

    document.getElementById("box" + var3).style.width = "50%";
    document.getElementById("box" + var3).style.left = "0%";
    document.getElementById("box" + var3).style.top = "25%";
    document.getElementById("box" + var3).style.zIndex = "6";
    document.getElementById("box" + var3).style.backgroundImage = "url("+images[imagesNum]+")";

    if (var1 == 1)
        var1 = 4
    if (var2 == 1)
        var2 = 4
    if (var3 == 1)
        var3 = 4
    if (imagesNum == 8)
        imagesNum = 0

    var1--
    var2--
    var3--
    imagesNum++

}

function carouselLeft() {
    document.getElementById("box" + var3).style.width = "60%";
    document.getElementById("box" + var3).style.left = "20%";
    document.getElementById("box" + var3).style.top = "20%";
    document.getElementById("box" + var3).style.zIndex = "9";

    document.getElementById("box" + var1).style.width = "50%";
    document.getElementById("box" + var1).style.left = "50%";
    document.getElementById("box" + var1).style.top = "25%";
    document.getElementById("box" + var1).style.zIndex = "6";
    document.getElementById("box" + var1).style.backgroundImage = "url("+images[imagesNum]+")";

    document.getElementById("box" + var2).style.width = "50%";
    document.getElementById("box" + var2).style.left = "0%";
    document.getElementById("box" + var2).style.top = "25%";
    document.getElementById("box" + var2).style.zIndex = "7";
    

    if (var1 == 3)
        var1 = 0
    if (var2 == 3)
        var2 = 0
    if (var3 == 3)
        var3 = 0
    if (imagesNum == 0)
        imagesNum = 8

    var1++
    var2++
    var3++
    imagesNum--

}

let vars1 = 1,
    vars2 = 2,
    vars3 = 3,
    imagesNum2 = 0;
box = "boxs";

function carouselRight2() {
    document.getElementById("boxs" + vars1).style.width = "60%";
    document.getElementById("boxs" + vars1).style.left = "20%";
    document.getElementById("boxs" + vars1).style.top = "20%";
    document.getElementById("boxs" + vars1).style.zIndex = "9";

    document.getElementById("boxs" + vars2).style.width = "50%";
    document.getElementById("boxs" + vars2).style.left = "50%";
    document.getElementById("boxs" + vars2).style.top = "25%";
    document.getElementById("boxs" + vars2).style.zIndex = "7";

    document.getElementById("boxs" + vars3).style.width = "50%";
    document.getElementById("boxs" + vars3).style.left = "0%";
    document.getElementById("boxs" + vars3).style.top = "25%";
    document.getElementById("boxs" + vars3).style.zIndex = "6";
    document.getElementById("boxs" + vars3).style.backgroundImage = "url("+images[imagesNum2]+")";

    if (vars1 == 1)
        vars1 = 4
    if (vars2 == 1)
        vars2 = 4
    if (vars3 == 1)
        vars3 = 4
    if (imagesNum2 == 8)
        imagesNum2 = 0

    vars1--
    vars2--
    vars3--
    imagesNum2++

}



function carouselLeft2() {
    document.getElementById("boxs" + vars3).style.width = "60%";
    document.getElementById("boxs" + vars3).style.left = "20%";
    document.getElementById("boxs" + vars3).style.top = "20%";
    document.getElementById("boxs" + vars3).style.zIndex = "9";

    document.getElementById("boxs" + vars1).style.width = "50%";
    document.getElementById("boxs" + vars1).style.left = "50%";
    document.getElementById("boxs" + vars1).style.top = "25%";
    document.getElementById("boxs" + vars1).style.zIndex = "6";
    document.getElementById("boxs" + vars1).style.backgroundImage = "url("+images[imagesNum2]+")";

    document.getElementById("boxs" + vars2).style.width = "50%";
    document.getElementById("boxs" + vars2).style.left = "0%";
    document.getElementById("boxs" + vars2).style.top = "25%";
    document.getElementById("boxs" + vars2).style.zIndex = "7";

    if (vars1 == 3)
        vars1 = 0
    if (vars2 == 3)
        vars2 = 0
    if (vars3 == 3)
        vars3 = 0
    if (imagesNum2 == 0)
        imagesNum2 = 8

    vars1++
    vars2++
    vars3++
    imagesNum2--

}