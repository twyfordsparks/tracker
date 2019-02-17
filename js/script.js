function getTriangle() {
    var x = parseInt(document.getElementById('Number1').value);
    var y = parseInt(document.getElementById('Number2').value);
    var z = parseInt(document.getElementById('Number3').value);


    if ((x === y) && (y === z) && (x === z)) {
        alert("equilateral triangle")
    } else if (x === y || y === z || x === z) {
        alert("isosceles triangle");
    } else if (x != y || y != z || x != z && x + y > z) {
        alert("scalene triangle");
    }
}
