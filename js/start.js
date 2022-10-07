function esconder(id) {
    var display = document.getElementById(id).style.display;
    if(display == "none") {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
        document.getElementById("form").style.display = 'flex';;
    }
}

function Redirect() {
    window.location.href = "view/asks.html";
    save();
}

function save() {
    var nome = document.querySelector("#nome").value;
    var serie = document.querySelector("#serie").value;

    const note = {
        "nome" : nome,
        "serie" : serie
    }

    localStorage.setItem("aluno", JSON.stringify(note));
}