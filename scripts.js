const btn = document.querySelector("#btn-form");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const informacao = document.querySelector(".informacao");

    // ESSE É O VALOR QUE O CLIENTE VAI DIGITAR
    const queroReceber = document.querySelector(".quero-receber");
    const valueQueroReceber = queroReceber.value;

    // VALOR QUE O CLIENTE PRECISA COBRAR (DISPLAY NONE)
    const valorCobrar = document.querySelector(".valor-cobrar");

    //ESCOLHA DA QUANTIDADES DE PARCELAS
    const qntParcelas = document.querySelector("#qnt-parcelas");
    const textQntParcelas = qntParcelas.options[qntParcelas.selectedIndex].text;

    var calculoQueroReceber;

    function converterNumero(numero, casasDecimais) {
        var numeroConvertido = parseFloat(numero).toFixed(casasDecimais);
        return parseFloat(numeroConvertido); // Convertendo de volta para número, se necessário
    }

    if (textQntParcelas == "Débito") {
        calculoQueroReceber = valueQueroReceber / (1 - 0.0148);
        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);

        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 1) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.0448);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 2) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.0643);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 3) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.0833);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 4) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.1037);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 5) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.1258);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 6) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.1498);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 7) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.1671);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 8) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.1776);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);

        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 9) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.1892);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 10) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.2017);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 11) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.2148);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else if (textQntParcelas == 12) {
        calculoQueroReceber = valueQueroReceber / (1 - 0.2333);

        const calculoQueroReceberFormatado = calculoQueroReceber.toFixed(2);
        const queroReceberParaReal = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(calculoQueroReceberFormatado);

        valorCobrar.style.display = "block";

        valorCobrar.innerHTML = "Valor a cobrar, " + queroReceberParaReal;

        informacao.style.display = "block";
    } else {
        valorCobrar.style.display = "block";
        valorCobrar.innerHTML = "Escolha entre Débito ou 1 a 12 parcelas!";
        valorCobrar.style.fontSize = "18px";
    }
});
