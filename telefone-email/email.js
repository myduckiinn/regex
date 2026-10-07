function checarEmail() {
    const email = document.getElementById("emailInput").value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email) && email === "aluno@email.com") {
        console.log("E-mail válido.");
        document.getElementById("resultado").innerText = "E-mail valido.";
    } else {
        console.log("E-mail inválido.");
        document.getElementById("resultado").innerText = "E-mail invalido.";
    }
}