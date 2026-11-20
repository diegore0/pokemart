function limparPedido() {
    document.getElementById("pokeball").value = 0;
    document.getElementById("greatball").value = 0;
    document.getElementById("ultraball").value = 0;
    document.getElementById("masterball").value = 0;

    document.getElementById("potion").value = 0;
    document.getElementById("superpotion").value = 0;
    document.getElementById("hyperpotion").value = 0;
    document.getElementById("revive").value = 0;

    document.getElementById("resumo").textContent = "";
}


function calcularPedido() {

    // ==========================================
    // 1. QUANTIDADES DAS POKEBOLAS
    // ==========================================
    let pokeball = Number(
        document.getElementById("pokeball").value
    );

    let greatball = Number(
        document.getElementById("greatball").value
    );

    let ultraball = Number(
        document.getElementById("ultraball").value
    );

    let masterball = Number(
        document.getElementById("masterball").value
    );


    // ==========================================
    // 2. QUANTIDADES DAS MEDICINAS
    // ==========================================

    let potion = Number(
        document.getElementById("potion").value
    );

    let superpotion = Number(
        document.getElementById("superpotion").value
    );

    let hyperpotion = Number(
        document.getElementById("hyperpotion").value
    );

    let revive = Number(
        document.getElementById("revive").value
    );


    // ==========================================
    // 3. VALIDAÇÃO DAS QUANTIDADES
    // ==========================================

    // Guarda todas as quantidades em uma lista
      let quantidades = [
        pokeball,
        greatball,
        ultraball,
        masterball,
        potion,
        superpotion,
        hyperpotion,
        revive
    ];
	
    // Verifica se existe alguma quantidade inválida
    if (quantidades.some(q => !Number.isInteger(q) || q < 0)) {

        document.getElementById("resumo").textContent =
            "Digite quantidades inteiras maiores ou iguais a zero.";

        return;

    }


    // ==========================================
    // 4. CÁLCULO DO VALOR TOTAL
    // ==========================================

    // Multiplica cada quantidade pelo seu preço
   let total =
        (pokeball * 200) +
        (greatball * 600) +
        (ultraball * 1200) +
        (masterball * 10000) +
        (potion * 300) +
        (superpotion * 700) +
        (hyperpotion * 1200) +
        (revive * 1500);

    // ==========================================
    // 5. MONTAGEM DO RESUMO DO PEDIDO
    // ==========================================

    // Começa com um texto vazio
    let resumo = "";

 // POKÉBOLAS

    if (pokeball > 0) {
        resumo += pokeball + " x Poké Ball — ₽ "
            + (pokeball * 200).toFixed(2) + "\n";
    }

    if (greatball > 0) {
        resumo += greatball + " x Great Ball — ₽ "
            + (greatball * 600).toFixed(2) + "\n";
    }

    if (ultraball > 0) {
        resumo += ultraball + " x Ultra Ball — ₽ "
            + (ultraball * 1200).toFixed(2) + "\n";
    }

    if (masterball > 0) {
        resumo += masterball + " x Master Ball — ₽ "
            + (masterball * 10000).toFixed(2) + "\n";
    }


     // ITENS DE CURA

    if (potion > 0) {
        resumo += potion + " x Potion — ₽ "
            + (potion * 300).toFixed(2) + "\n";
    }

    if (superpotion > 0) {
        resumo += superpotion + " x Super Potion — ₽ "
            + (superpotion * 700).toFixed(2) + "\n";
    }

    if (hyperpotion > 0) {
        resumo += hyperpotion + " x Hyper Potion — ₽ "
            + (hyperpotion * 1200).toFixed(2) + "\n";
    }

    if (revive > 0) {
        resumo += revive + " x Revive — ₽ "
            + (revive * 1500).toFixed(2) + "\n";
    }


    // ==========================================
    // 6. VERIFICA SE O PEDIDO ESTÁ VAZIO
    // ==========================================

    if (resumo === "") {

        resumo = "Nenhum produto selecionado.\n";

    }


    // ==========================================
    // 7. ACRESCENTA O TOTAL AO RESUMO
    // ==========================================

       resumo += "\nTOTAL: ₽ "
        + total.toFixed(2).replace(".", ",");


    // ==========================================
    // 8. MOSTRA O RESULTADO NA PÁGINA
    // ==========================================

    document.getElementById("resumo").textContent = resumo;

}
