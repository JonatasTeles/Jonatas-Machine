let historico = [];

function salvarNoHistorico(id) {
    historico.push(id);
    atualizarLista();
}

function atualizarLista() {
    listaHistorico.innerHTML = ``;
    historico.forEach(item => {
        listaHistorico.innerHTML += `<p>${item}</p>`;
    })
}

function alternarHistorico() {
    if (painelHistorico.classList.contains('historicoE')) {
        painelHistorico.classList.remove('historicoE');
        painelHistorico.classList.add('historicoV');
        btnHistorico.innerHTML = `Esconder Histórico`
    } else {
        painelHistorico.classList.remove('historicoV');
        painelHistorico.classList.add('historicoE');
        btnHistorico.innerHTML = `Mostrar Histórico`;
    }
}

function limparHistorico() {
    historico = [];
    atualizarLista();
}

function mudarTela(idTelaAtual, idTelaNova) {
    let atual = document.getElementById(idTelaAtual);
    let nova = document.getElementById(idTelaNova);

    atual.classList.remove('visivel');
    atual.classList.add('escondida');

    nova.classList.remove('escondida');
    nova.classList.add('visivel');

    voltarTudo();
}

function aparecerProx(id) {
    voltarTudo();

    let prox = document.getElementById(id);

    prox.classList.remove('secaoE');
    prox.classList.add('secaoV');
}

function voltarTudo() {
    let remover = document.querySelectorAll('.secaoExpand');

    remover.forEach(tela => {
        tela.classList.remove('secaoV');
        tela.classList.add('secaoE');
    });
}

function mudarSecao(idTelaAtual, idTelaNova) {
    let atual = document.getElementById(idTelaAtual);
    let nova = document.getElementById(idTelaNova);

    atual.classList.remove('secaoV');
    atual.classList.add('secaoE');

    nova.classList.remove('SecaoE');
    nova.classList.add('SecaoV');
}

function converterDecimal() {
    let decimal = Number(ipt_decimal.value);

    if (isNaN(decimal) || ipt_decimal.value == '') {
        alert("Digite um valor válido");
    } else {
        respD1.innerHTML = decimal.toString(2);
        respD2.innerHTML = decimal.toString(8);
        respD3.innerHTML = decimal.toString(16).toUpperCase();

        salvarNoHistorico(`# Decimal: ${decimal} -> Binário: ${decimal.toString(2)} Octal: ${decimal.toString(8)} Hexadecimal: ${decimal.toString(16).toUpperCase()}`)
    }
}

function converterBinario() {
    let binario = Number(ipt_binario.value);

    if (isNaN(binario) || ipt_binario.value == '') {
        alert("Digite um valor válido");
    } else {
        let decimal = parseInt(binario, 2);

        respB1.innerHTML = decimal;
        respB2.innerHTML = decimal.toString(8);
        respB3.innerHTML = decimal.toString(16).toUpperCase();

        salvarNoHistorico(`# Binário: ${binario} -> Decimal: ${decimal} Octal: ${decimal.toString(8)} Hexadecimal: ${decimal.toString(16).toUpperCase()}`)
    }
}

function converterOctal() {
    let octal = Number(ipt_octal.value);

    if (isNaN(octal) || ipt_octal.value == '') {
        alert("Digite um valor válido");
    } else {
        let decimal = parseInt(octal, 8);

        respO1.innerHTML = decimal;
        respO2.innerHTML = decimal.toString(2);
        respO3.innerHTML = decimal.toString(16).toUpperCase();

        salvarNoHistorico(`# Octal: ${octal} -> Decimal: ${decimal} Binário: ${decimal.toString(2)} Hexadecimal: ${decimal.toString(16).toUpperCase()}`)
    }
}

function converterHexadecimal() {
    let decimal = parseInt(ipt_hexadecimal.value, 16);

    if (isNaN(decimal) || ipt_hexadecimal.value == '') {
        alert("Digite um valor válido");
    } else {
        respH1.innerHTML = decimal;
        respH2.innerHTML = decimal.toString(2);
        respH3.innerHTML = decimal.toString(8);

        salvarNoHistorico(`# Hexadecimal: ${ipt_hexadecimal.value.toUpperCase()} -> Decimal: ${decimal} Binário: ${decimal.toString(2)} Octal: ${decimal.toString(8)}`)
    }
}

function calcularOperacao() {
    let baseNum1 = combo_baseNum1.value;
    let baseNum2 = combo_baseNum2.value;

    let numInserido1 = ipt_numInserido1.value.toUpperCase();
    let numInserido2 = ipt_numInserido2.value.toUpperCase();

    let operacao = combo_operacao.value;
    let simboloOpe = '';
    let simboloBase1 = '';
    let simboloBase2 = '';

    let decimal1 = '';
    let decimal2 = '';
    let resultado = '';

    if (numInserido1 == '' || numInserido2 == '') {
        alert("Digite valores válidos");
    } else {
        if (baseNum1 == 'binario') {
            simboloBase1 = '2';
            decimal1 = parseInt(numInserido1, 2);
        } else if (baseNum1 == 'octal') {
            simboloBase1 = '8';
            decimal1 = parseInt(numInserido1, 8);
        } else if (baseNum1 == 'hexadecimal') {
            simboloBase1 = '16';
            decimal1 = parseInt(numInserido1, 16);
        } else {
            simboloBase1 = '10';
            decimal1 = numInserido1;
        }

        if (baseNum2 == 'binario') {
            simboloBase2 = '2';
            decimal2 = parseInt(numInserido2, 2);
        } else if (baseNum2 == 'octal') {
            simboloBase2 = '8';
            decimal2 = parseInt(numInserido2, 8);
        } else if (baseNum2 == 'hexadecimal') {
            simboloBase2 = '16';
            decimal2 = parseInt(numInserido2, 16);
        } else {
            simboloBase2 = '10';
            decimal2 = numInserido2;
        }

        decimal1 = Number(decimal1);
        decimal2 = Number(decimal2);

        if (operacao == 'soma') {
            simboloOpe = '+';
            resultado = decimal1 + decimal2;
        } else if (operacao == 'sub') {
            simboloOpe = '-';
            resultado = decimal1 - decimal2;
        } else if (operacao == 'mult') {
            simboloOpe = '*';
            resultado = decimal1 * decimal2;
        } else if (operacao == 'divisao') {
            simboloOpe = '/';
            resultado = decimal1 / decimal2;
        } else if (operacao == 'expoente') {
            simboloOpe = '**';
            resultado = decimal1 ** decimal2;
        } else {
            simboloOpe = '%';
            resultado = decimal1 % decimal2;
        }

        if (isNaN(resultado)) {
            alert("Digite valores Válidos");
        } else {
            resultadoOperacao.innerHTML = resultado;

            salvarNoHistorico(`# ${numInserido1}<sub>${simboloBase1}</sub>  ${simboloOpe}  ${numInserido2}<sub>${simboloBase2}</sub>  =  ${resultado}<sub>10</sub>`);
        }
    }
}