var compImg = 2;
var totalImg = 3;

function slider(x) {
    var image = document.getElementById('img');
    compImg = compImg + x;
    image.src = "C:\Users\safae\Downloads\ProjectFin\image" + compImg + ".jpg";
    if (compImg >= totalImg) {
        compImg = 2;
    }
    if (compImg < 2) {
        compImg = totalImg;
    }

}