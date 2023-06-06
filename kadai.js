function addText() {
    var item=document.getElementById('text1').value;
    document.getElementById('area1').value += item+ "\n";
}

function deleteText() {
    var d= document.getElementById("area1");
    d.value = '';

    var f= document.getElementById("text1");
    f.value = '';
}