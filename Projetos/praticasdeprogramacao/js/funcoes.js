//const n1 //declaração global de variavel

//funções de declaração
function calcular(operacao){
	const n1 = Number(document.getElementById('n1').value)
	const n2 = Number(document.getElementById('n2').value)
	
	let result
	switch(operacao){
		case '+':
			result = somar(n1,n2)
			break;
		case '-':
			result = subtrair(n1,n2)
			break;
		case '*':
			result = multiplicar(n1,n2)
			break;
		case '/':
			result = dividir(n1,n2)
			break;
		case '!':
			result = 'O resultado é: ' + fatorar(n1) + ' (Fatorial)'
			break;
	}
	
	document.getElementById('resultado').innerHTML =  result
}
function fatorar(x){
	if (x < 1){
		return 1
	}else{
		return x * fatorial((x - 1))
	}
}
function somar(n1,n2){
	//const n1 = Number(document.getElementById('n1').value)
	//const n2 = Number(document.getElementById('n2').value)
	
	const result = Number(n1) + Number(n2)
	return 'O resultado é: ' + result + ' (SOMA)'
	
	//document.getElementById('resultado').innerHTML =  "O resultado é: " + result + ' (SOMA)'
}
function subtrair(n1,n2){
	//const n1 = Number(document.getElementById('n1').value)
	//const n2 = Number(document.getElementById('n2').value)
	
	const result = n1 - n2
	return 'O resultado é: ' + result + ' (SUBTRAÇÃO)'
	
	//document.getElementById('resultado').innerHTML =  "O resultado é: " + result + ' (SUBTRAÇÃO)'
}
function multiplicar(n1,n2){
	//const n1 = Number(document.getElementById('n1').value)
	//const n2 = Number(document.getElementById('n2').value)
	
	const result = n1 * n2
	return 'O resultado é: ' + result + ' (MULTIPLICAÇÃO)'
	
	//document.getElementById('resultado').innerHTML =  "O resultado é: " + result + ' (MULTIPLICAÇÃO)'
}
function dividir(){
	const n1 = Number(document.getElementById('n1').value)
	const n2 = Number(document.getElementById('n2').value)
	
	if (n2 == 0) {
		//document.getElementById('resultado').innerHTML =  'O resultado é: Erro (DIVISÃO POR ZERO)'
		result = 'O resultado é: Erro (DIVISÃO POR ZERO)'
		console.error(result)
		return null
	}else{
		const result = n1 / n2
		//document.getElementById('resultado').innerHTML =  "O resultado é: " + result + ' (DIVISÃO)'
		result = 'O resultado é: ' + result + ' (DIVISÃO)'
		return result
	}
	
}

function taboada(){
	let comp1 = ''
			let comp2 = ''
			
			let armazenar = ''
				
			for (let valor = 1; valor <= 10; valor++){
				console.log('Taboada de ' + valor + ':' + String.fromCharCode(10))
				armazenar = armazenar + 'Taboada de ' + valor + ':' + '<br>'
				for (let i = 1; i <= 10; i++){
					if(i < 10){
						comp1 = '0'
					}else{
						comp1 = ''
					}
					if(valor < 10){
						comp2 = '0'
					}else{
						comp2 = ''
					}
					console.log(comp2 + valor + ' X ' + comp1 + i + " = " + valor*i)
					armazenar = armazenar + comp2 + valor + ' X ' + comp1 + i + " = " + valor*i + '<br>'
				}
			}
			
			document.getElementById('resultado').innerHTML =  armazenar
}
//funcao de expressao
const somaExpressao = function(n1,n2){
	return n1 + n2
}
//função seta ou Arrow Function
const somaArrow = (n1, n2) => {
	return n1 + n2
}
//ou se usar parenteses no lugar das chaves não precisa do return
const somaArrow2 = (n1, n2) => (
	 n1 + n2
)
//ou pode ser utilizado no formato de "1 linha"
const somaArrow3 = (n1,n2) => n1 + n2;


//Recursividade - chamada de funções dentro das próprias, criando loops infinitos com métodos de paradas 
//bem definidas, com intuito de substituir estruturas de repertição em soluções complexas

