function esconder(id) {
    var display = document.getElementById(id).style.display;
    if(display == "none") {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
        document.getElementById("form").style.display = 'flex';;
    }
}