
function alterar(produto,acao){
	const qtd   = document.getElementById('qta_'   + produto)
	const valor = document.getElementById('valor_' + produto)
	const total = document.getElementById('total_' + produto)
	
	acao == 's' ? qtd.innerHTML++ : qtd.innerHTML-- <= 0 ? qtd.innerHTML = 0 : qtd.innerHTML = qtd.innerHTML;
	
	total.innerHTML = formatarMoeda(qtd.innerHTML * somenteNumeros(valor.innerHTML))
	
	let subtotal = 0
	for(let i = 1; i <= 3; i++){
		subtotal += Number(somenteNumeros(document.getElementById('total_' + i).innerHTML))
	}
	document.getElementById('sub_total').innerHTML = formatarMoeda(subtotal)
}
function somenteNumeros(n){
	return n.replace(/\D/g,'')
}
function formatarMoeda(n){
	return 'R$ ' + n.toLocaleString('pt-BR')
}