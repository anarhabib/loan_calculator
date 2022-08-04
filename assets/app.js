var btn = document.getElementById('btn')
btn.onclick = function Calculate() {
    var loan = document.getElementById('amount').value;
    var select_value = document.getElementById('slc').value;
    var rate = document.getElementById('rate').value;
    var l = Number(loan);
    var s = Number(select_value);
    var r = Number(rate);
    var m = s / 12;

    var z = l + (l * (r/100) * m)
    var y = z / 12;
    document.getElementById('mp').innerHTML = y.toFixed(2);
    document.getElementById('tp').innerHTML = z.toFixed(2);
    
}