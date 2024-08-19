//**************************************
//Variaveis globais
let tabuleiro
let board
let aviso
let jogador
let linha
let coluna
//**************************************
function iniciar(){
	tabuleiro = []
	board = document.getElementById('board')
	aviso = document.getElementById('aviso')
	jogador = 1
	
	for (let i=0; i < 3; i++){
		tabuleiro[i] = []
		for(let j=0; j < 3; j++){
			tabuleiro[i][j] = 0
		}
	}
	
	exibir()
	
	console.table(tabuleiro)
}
function exibir(){
	let tabela = '<table border="1" cellpadding="10">'
	let	marcador = '_'
	for (let i=0; i < 3; i++){
		tabela += '<tr>'
		for(let j=0; j < 3; j++){
			switch(tabuleiro[i][j]){
				case -1:
				marcador = 'X' 
				break;
				case 1:
				marcador = 'O' 
				break;
				default:
				marcador = '_' 
			}
			tabela += '<td>' + marcador + '</td>'
		}
		tabela += '</tr>'
	}
	board.innerHTML = tabela
}
function jogar(){
	aviso.innerHTML = 'Vez do jogador '  + numeroJogador()
	
	linha = document.getElementById('linha').value - 1
	coluna = document.getElementById('coluna').value - 1
	
	if(tabuleiro[linha][coluna] == 0){ 
		tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
		jogador++
	}else{
		//alert('Jogada Inválida')
		aviso.InnerHTML = 'Esse campo já foi marcado'
	}
	
	console.table(tabuleiro)

	let result = 0
	
	exibir()
	result = checar()
	if (result == 1){
		aviso.innerHTML = 'Fim - Jogador ' + numeroJogador() + ' venceu!'
	}
	
}

	/*for(let j=0; j < 3; j++){
			tabuleiro[i][j] = 0
		}*/
function checar(){
	//Linha
	for (let i=0; i < 3; i++){
		let soma = 0
		for(let j=0; j < 3; j++){
			soma = soma + tabuleiro[i][j]
		}
		if (soma == 3 || soma == -3){
			//aviso.innerHTML = 'Fim'
			return 1
		}
	}
	//Coluna
	for (let i=0; i < 3; i++){
		let soma = 0
		for(let j=0; j < 3; j++){
			soma = soma + tabuleiro[j][i]
		}
		if (soma == 3 || soma == -3){
			//aviso.innerHTML = 'Fim'
			return 1
		}
	}
	//Diagonal
	soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]
	if (soma == 3 || soma == -3){
		//aviso.innerHTML = 'Fim'
		return 1
	}
	soma = tabuleiro[0][2] + tabuleiro[2][2] + tabuleiro[2][0]
	if (soma == 3 || soma == -3){
		//aviso.innerHTML = 'Fim'
		return 1
	}
	return 0	
}

function numeroJogador(){
	return jogador%2 + 1
}