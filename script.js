// github.com/KarinMarie/

function CamposPreenchidos() {

    if (document.getElementsByName("nome_usuario")[0].value.length == 0 || document.getElementsByName("senha")[0].value.length == 0) {
        alert("Preencha o NOME DE USUÁRIO e a SENHA.");
        return;
    }

    if (document.getElementById("nome").value.length == 0)
        document.getElementById("nomeTexto").innerHTML = "Não preencheu o NOME.";
    else
        document.getElementById("nomeTexto").innerHTML = "<strong>Nome:</strong> " + document.getElementById("nome").value + ".";

    if (document.getElementById("data_nascimento").value.length == "")
        document.getElementById("dataNasc").innerHTML = "Não preencheu a DATA DE NASCIMENTO.";
    else
        document.getElementById("dataNasc").innerHTML = "<strong>Data de Nascimento:</strong> " + document.getElementById("data_nascimento").value + ".";

    if (document.getElementById("email").value.length == "")
        document.getElementById("emailTexto").innerHTML = "Não preencheu o E-MAIL.";
    else
        document.getElementById("emailTexto").innerHTML = "<strong>E-mail:</strong> " + document.getElementById("email").value + ".";

    if (document.getElementById("site_favorito").value.length == "")
        document.getElementById("siteTexto").innerHTML = "Não preencheu o SITE FAVORITO.";
    else
        document.getElementById("siteTexto").innerHTML = "<strong>Site favorito:</strong> " + document.getElementById("site_favorito").value + ".";

    if (!document.getElementById("infoCurso").checked && !document.getElementById("maCurso").checked)
        document.getElementById("cursoTexto").innerHTML = "Não preencheu o CURSO."
    else if (document.getElementById("infoCurso").checked)
        document.getElementById("cursoTexto").innerHTML = "<strong>Curso:</strong> " + document.getElementById("infoCurso").value + ".";
    else
        document.getElementById("cursoTexto").innerHTML = "<strong>Curso:</strong> " + document.getElementById("maCurso").value + ".";

    if (!document.getElementById("check1").checked && !document.getElementById("check2").checked && !document.getElementById("check3").checked)
        document.getElementById("aulasTexto").innerHTML = "Não escolheu AULAS."
    else {
        check = new Array(3);

        if (document.getElementById("check1").checked)
            check[0] = document.getElementById("check1").value;
        else
            check[0] = "";

        if (document.getElementById("check2").checked)
            check[1] = document.getElementById("check2").value;
        else
            check[1] = "";

        if (document.getElementById("check3").checked)
            check[2] = document.getElementById("check3").value;
        else
            check[2] = "";

        document.getElementById("aulasTexto").innerHTML = "<strong>Aulas: </strong> " + check;
    }

    if (document.getElementById("foto").value.length == "")
        document.getElementById("fotoTexto").innerHTML = "Não preencheu a FOTO.";
    else
        document.getElementById("fotoTexto").innerHTML = "<strong>Foto: </strong> preenchida.";

    if (document.getElementById("observacao").value.length == "")
        document.getElementById("obsTexto").innerHTML = "Não preencheu a OBSERVAÇÃO.";
    else
        document.getElementById("obsTexto").innerHTML = "<strong>Observação: </strong>" + document.getElementById("observacao").value + ".";

}