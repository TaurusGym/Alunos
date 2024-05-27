//FUNÇÃO APARA ATIVAR BOTÃO CLICADO
// Função que adiciona as classes 'active-btn' e 'btn' ao item de lista clicado
function handleItemClick(event) {
  // Verifica se o clique foi em um <li> ou um dos seus filhos
  let listItem = event.target.closest('li');
  if (!listItem) return; // Se não foi em um <li> ou um dos seus filhos, sai da função

  // Seleciona o item atualmente ativo e remove as classes 'active-btn' e 'btn'
  const currentActive = document.querySelector('li.active-btn');
  if (currentActive && currentActive !== listItem) {
      currentActive.classList.remove('active-btn');
      currentActive.querySelectorAll('i, a').forEach(child => {
          child.classList.remove('btn');
      });
  }

  // Adiciona as classes 'active-btn' e 'btn' ao item de lista clicado
  listItem.classList.add('active-btn');
  listItem.querySelectorAll('i, a').forEach(child => {
      child.classList.add('btn');
  });
}

// Adiciona o evento de clique a todos os itens de lista dentro do elemento com a classe 'items'
document.querySelectorAll('.items li').forEach(item => {
  item.addEventListener('click', handleItemClick);
});

//senha segura
function showInfo(){
    const infoDiv = document.querySelector('.info')
    const senha = document.getElementById('passInput').value;
  
    if (senha === '') {
      infoDiv.style.display = 'none'; // Esconder a div de informações quando o campo está vazio
    } else {
      infoDiv.style.display = 'block'; // Mostrar a div de informações quando o usuário começa a digitar
    }
  }
  
  function verifyPass(){
    
    showInfo();
    const senha = document.getElementById('passInput').value
    const feed = document.getElementsByClassName('feed')
   
  
  
    const maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const number = '0123456789'
    const especial = '@#$%&!'
  
    let m = []
    let n = []
    let e =[]
     
    //validação letras maiúsculas
    for(i = 0; i<senha.length; i++){
      m.push(maiuscula.indexOf(senha.charAt(i)))
      let maxM = Math.max.apply(null,m)
      if(maxM >= 0) {
        feed[1].style.color = '#15803d'
      } else {
        feed[1].style.color = '#ff383b'
      }
  
      n.push(number.indexOf(senha.charAt(i)))
      let maxN = Math.max.apply(null,n)
      if(maxN >= 0) {
        feed[2].style.color = '#15803d'
      } else {
        feed[2].style.color = '#ff383b'
      }
  
      e.push(especial.indexOf(senha.charAt(i)))
      let maxE = Math.max.apply(null,e)
      if(maxE >= 0) {
        feed[3].style.color = '#15803d'
      } else {
        feed[3].style.color = '#ff383b'
      }
  
      if(senha.length >=8){
        feed[0].style.color = '#15803d'
      } else{
        feed[0].style.color = '#ff383b'
      }
    }
  }
 
  
//MÁSCARA PAAR O CAMPO TELEFONE
  $(document).ready(function(){
    $('#telefone').inputmask('(99) 99999-9999')
})

//Adicionar do cadastro

var newMemberAddBtn = document.querySelector('.addMemberBtn'),
imgInput = document.querySelector('.img'),
imgHolder = document.querySelector('.imgholder'),
uploadimg = document.querySelector("#uploadimg")

newMemberAddBtn.addEventListener('click', ()=> {
    imgInput.src = "image/pic1.png"
})

uploadimg.onchange = function(){
    if(uploadimg.files[0].size < 3000000){   // 3MB = 3000000
        var fileReader = new FileReader()

        fileReader.onload = function(e){
            var imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(uploadimg.files[0])
    }

    else{
        alert("Esse Arquivo é muito Grande")
    }

}

//FILTAR PESQUISAS

const inputBusca = document.getElementById('pesquisar')
const tabelaAlunos = document.querySelector('.body-table')

inputBusca.addEventListener('keyup', () => {
    let expressao = inputBusca.value

    let linhas = tabelaAlunos.getElementsByTagName('tr')

    for (let posicao in linhas) {
      if (true === isNaN(posicao)) {
        continue
      }

      let conteudoDaLinha = linhas[posicao].innerHTML

      if (true === conteudoDaLinha.includes(expressao)) {
        linhas[posicao].style.display = ''
      } else {
        linhas[posicao].style.display = 'none'
      }
    }
})
  
//PAGINAÇÃO
const table = document.getElementById("table");
const rows = table.rows;
const pages = Math.ceil(rows.length / 10);
const rowsPerPage = 10;

// Hide all rows except the first 10
for (let i = rowsPerPage; i < rows.length; i++) {
    rows[i].style.display = "none";
}

// Show/hide rows based on the selected page
const pageButtons = document.querySelectorAll(".pagination button");
pageButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const pageNum = parseInt(e.target.id.replace("page", "")) - 1;
        let startIndex = pageNum * rowsPerPage;
        let endIndex = startIndex + rowsPerPage;
        if (endIndex > rows.length) {
            endIndex = rows.length;
        }
        for (let i = 0; i < rows.length; i++) {
            if (i >= startIndex && i < endIndex) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
        // Update the text in the footer
        document.querySelector("footer span").textContent = `Mostrando ${startIndex + 1} a ${endIndex} de ${rows.length} Alunos`;
    });
});

// Previous page
document.getElementById("prev").addEventListener("click", () => {
    const currentPage = document.querySelector(".active").id.replace("page", "");
    const prevPage = parseInt(currentPage) - 1;
    if (prevPage >= 1) {
        document.getElementById(`page${prevPage}`).click();
    }
});

// Next page
document.getElementById("next").addEventListener("click", () => {
    const currentPage = document.querySelector(".active").id.replace("page", "");
    const nextPage = parseInt(currentPage) + 1;
    if (nextPage <= pages) {
        document.getElementById(`page${nextPage}`).click();
    }
});