function checarTelefone() {
    const telefone = document.getElementById("telefoneInput").value;
    const regexTelefone = /^\d{11}$/;

    if (regexTelefone.test(telefone) && telefone === "67999999999") {
        console.log("Telefone válido.");
        document.getElementById("resultado").innerText = "Telefone valido.";
    } else {
        console.log("Telefone inválido.");
        document.getElementById("resultado").innerText = "Telefone invalido.";
    }
}