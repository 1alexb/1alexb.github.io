var box = document.getElementById('beerbottles');
var txt = '';
var n = 99;

while (n > 0) {
    var bottle = n + " bottle"; // singular
    if (n > 1) bottle += "s"; // plural

// calculate
    var next = (n - 1) + " bottle";
    if (n - 1 != 1) next += "s";

    txt += bottle + " of beer on the wall, " + bottle + " of beer.";
    txt += "<p>Take one down and pass it around, " + (n-1 > 0 ? next : 'no more bottles') + " of beer on the wall.</p>";
    n--;
}

// output
txt += "No more bottles of beer on the wall, no more bottles of beer.";
txt += "Go to the store and buy some more, 99 bottles of beer on the wall.";

box.innerHTML = txt;
