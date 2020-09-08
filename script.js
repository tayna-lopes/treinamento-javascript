function adicionaLinha(idTabela) {
  var tabela = document.getElementById(idTabela);
  var numeroLinhas = tabela.rows.length;
  var linha = tabela.insertRow(numeroLinhas);
  var celula1 = linha.insertCell(0);
  var celula2 = linha.insertCell(1);   
  var celula3 = linha.insertCell(2);
  var celula4 = linha.insertCell(3);
 
  celula1.setAttribute('class','nome');
  celula2.setAttribute('class','idade');
  celula3.setAttribute('class','cidade');
  celula4.setAttribute('class','acoes');

  celula1.innerHTML = " ";
  celula2.innerHTML = " ";
  celula3.innerHTML = " "; 
  celula4.innerHTML = "<button onclick='removeLinha(this.parentNode.parentNode.rowIndex)' class='del'><img src='rsz_delete.png'></button><button onclick='alterarLinha(this.parentNode.parentNode.rowIndex)' class='edit'><img src='rsz_edit.png'></button>";
  alterarLinha(numeroLinhas);

}
function alterarLinha(l) {
  let linha = l;
  linha=linha-1;
  var nome = document.getElementsByClassName('nome');
  var idade = document.getElementsByClassName('idade');
  var cidade = document.getElementsByClassName('cidade');
  var acoes = document.getElementsByClassName('acoes');

  var info1 = nome[linha].textContent; 
  var info2 = idade[linha].textContent;
  var info3 = cidade[linha].textContent;

  if(!info1 && !info2 && !info3){
    info1=" ";
    info2=" ";
    info3=" ";
  }
  nome[linha].innerHTML = " ";
  idade[linha].innerHTML = " ";
  cidade[linha].innerHTML = " ";
  acoes[linha].innerHTML = "";

  var input1 = document.createElement("INPUT");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "nome_input");
    input1.value = info1;

    var input2 = document.createElement("INPUT");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "idade_input");
    input2.value = info2;

    var input3 = document.createElement("INPUT");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "cidade_input");
    input3.value = info3;

    var salvar = document.createElement("BUTTON");
    salvar.setAttribute("id", "salva");
    salvar.setAttribute("onclick", "confirm()");
    var img_save = document.createElement('img');
    img_save.setAttribute('src','rsz_save.png');
    salvar.appendChild(img_save);

    nome[linha].appendChild(input1);
    idade[linha].appendChild(input2);
    cidade[linha].appendChild(input3);
    acoes[linha].appendChild(salvar);

    var btn_Confirma= acoes[linha].childNodes;

    btn_Confirma[0].onclick = function confirm() {
      var val_cel = document.getElementById("nome_input").value;
      var val_cel2 = document.getElementById("idade_input").value;
      var val_cel3 = document.getElementById("cidade_input").value;

      if (val_cel == " " || val_cel2 == " " || val_cel3 == " ") {
        alert("Preencha todos os campos")
      }
      else {
        nome[linha].innerHTML = val_cel;
        idade[linha].innerHTML = val_cel2;
        cidade[linha].innerHTML = val_cel3;
        var rem = btn_Confirma[0];
        rem.remove();
        acoes[linha].innerHTML = "<button onclick='removeLinha(this.parentNode.parentNode.rowIndex)' class='del'><img src='rsz_delete.png'></button><button onclick='alterarLinha(this.parentNode.parentNode.rowIndex)' class='edit'><img src='rsz_edit.png'></button>";
      } 
   }
  }

function removeLinha(linha1) {
  var i=linha1;
  document.getElementById('tbl').deleteRow(i);
} 
