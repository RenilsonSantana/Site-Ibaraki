function validarContato(){
	if(document.adm.nNome.value.length<8){
		window.alert("Preencha o campo nome corretamente.");
		adm.nNome.focus();
		return false;
	}
	if(document.adm.nMail.value.length<=10){
		window.alert("Preencha o campo e-mail.");
		adm.nMail.focus();
		return false;
	}
	if(document.adm.nMail.value.indexOf("@"),0){
		window.alert("Preencha o campo e-mail corretamente");
		adm.nMail.focus();
		return false;
	}
	if(document.adm.nTel.value.length<12){
		window.alert("Preencha o campo telefone.");
		adm.nTel.focus();
		return false;
	}
	if(document.adm.nMsg.value.length<20){
		window.alert("Escreva sua mensagem (deve obter no minimo 20 caracteres)");
		adm.nMsg.focus();
		return false;
	}
	window.alert("E-mail enviado com sucesso!");
	return true;
}

function validarTrabalhe(){
	if(document.adm.nNome.value.length<8){
		window.alert("Preencha o campo nome corretamente.");
		adm.nNome.focus();
		return false;
	}
	if(document.adm.nMail.value.length<=10){
		window.alert("Preencha o campo e-mail.");
		adm.nMail.focus();
		return false;
	}
	if(document.adm.nMail.value.indexOf("@"),0){
		window.alert("Preencha o campo e-mail corretamente");
		adm.nMail.focus();
		return false;
	}
	if(document.adm.nTel.value.length<12){
		window.alert("Preencha o campo telefone.");
		adm.nTel.focus();
		return false;
	}
	if(document.adm.nMsg.value.length<20){
		window.alert("Escreva sua mensagem (deve obter no minimo 20 caracteres)");
		adm.nMsg.focus();
		return false;
	}
	if(document.adm.nCep.value.length<9){
		window.alert("Preencha o campo CEP corretamente");
		adm.nCep.focus();
		return false;
	}
	if(document.adm.nRua.value.length<10){
		window.alert("Preencha o nome da sua Rua");
		adm.nRua.focus();
		return false;
	}
	if(document.adm.nNum.value.length<1){
		window.alert("Preencha o número de sua casa");
		adm.nNum.focus();
		return false;
	}
	if(document.adm.nCid.value.length<3){
		window.alert("Coloque sua cidade");
		adm.nCid.focus();
		return false;
	}
	window.alert("E-mail enviado com sucesso!");
	return true;
}

function formatar(mascara, documento){
	var i = documento.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(i)
  	if (texto.substring(0,1) != saida){
    	documento.value += texto.substring(0,1);
	}
}