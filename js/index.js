
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(' [ERRO]Verifique os dados e tente novamente');
    } else {
        var fsex = document.querySelectorAll('input[name="radsex"]');
        var idade = fano.value;
        console.log(idade)
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked == true) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-masculino.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-masculino.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-masculino.png');
            } else {
                img.setAttribute('src', 'idoso-masculino.png');
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-feminina.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-feminina.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-feminina.png');
            } else {
                img.setAttribute('src', 'idoso-feminino.png');
            }
        }
        let ano-nascimento = 2000 - idade;
        res.innerHTML = `Nascido(a) em ${ano-nascimento}.`;
        res.appendChild(img);
       
    }

}
