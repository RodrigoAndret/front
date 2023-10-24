validaSenha = () => {
    event.preventDefault();

    const elementSenha = document.getElementById('senha');
    const senha = elementSenha.value;

    /* regex (expressões regulares) = combinacao de caracteres especiais, que identifica determinado
    valor -> neste caso, entre duas barras e dois colchetes*/
    const senhaLetraMi = /[a-z]/.test(senha);
    const senhaLetraMa = /[A-Z]/.test(senha);
    const senhaNumero = /[0-9]/.test(senha);
    const senhaCaractereEspecial = /[!@#$%&*()_+-=,.;:?/]/

    const linhaResultado = document.getElementsByClassName('error');
    while (linhaResultado.length != 0) {
        linhaResultado[0].remove();
    }

    elementSenha.style.borderColor = '#ccc';

    if (senha.length <= 7 || !senhaLetraMa || !senhaLetraMi || !senhaNumero || !senhaCaractereEspecial) {
        // alert('Senha muito curta: minimo de 7 caracteres');

        const containerMensagemPadrao = document.getElementsByClassName('mensagem-padrao');
        containerMensagemPadrao[0].insertAdjacentHTML('afterbegin', '<p class="error">Senha deve conter letras maiusculas e minusculas, numeros e caracteres especiais</p>');

        const containerMensagemPersonalizada = document.getElementsByClassName('mensagem-erro');

        let erro = '';
        if (!senhaLetraMa) {
            erro = '<p class="error">Senha deve conter letras maiusculas</p>';
        }

        if (!senhaLetraMi) {
            erro = '<p class="error">Senha deve conter letras minusculas</p>';
        }

        if (senha.length <= 7) {
            erro = '<p class="error">Senha deve conter no minimo 8 caracteres</p>';
        }

        if (!senhaNumero) {
            erro = '<p class="error">sua senha deve conter numeros</p>'
        }

        if (!senhaCaractereEspecial) {
            erro = '<p class="error">sua senha deve conter caracteres especiais</p>'
        }

        elementSenha.style.borderColor = 'red';

        containerMensagemPersonalizada[0].insertAdjacentHTML('afterbegin', erro);



        return;
    }
    validaLogin();

}

validaLogin = () => {

    // fazer aqui a validacao do email ou login com determinados criterios (usando regex também)

    alert("logou com sucesso!");
}