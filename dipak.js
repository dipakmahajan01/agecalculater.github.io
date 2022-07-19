function age() {
    var d1 = document.querySelector('#Date').value;
    var m1 = document.querySelector('#Month').value;
    var y1 = document.querySelector('#Year').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;

    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.querySelector("#age").innerHTML = 'your Age is' + " " + y + " " + 'year' + " " + m + " " + 'Month' + " " + d + " " + 'Days';
}