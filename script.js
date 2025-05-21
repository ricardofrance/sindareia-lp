document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const formMessage = document.getElementById('form-message');

    if (registrationForm) {
        registrationForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const categoria = document.getElementById('categoria').value.trim();

            // Validação simples
            if (!nome || !email) {
                displayMessage('Por favor, preencha seu nome e e-mail.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                displayMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Simula o envio de dados para um servidor
            // Em um cenário real, você enviaria esses dados para um endpoint API
            // Usando Fetch API ou XMLHttpRequest.
            console.log('Dados do formulário a serem enviados:', {
                nome,
                email,
                telefone,
                categoria
            });

            // Exemplo de como você faria uma requisição POST:
            /*
            try {
                const response = await fetch('/api/register-event', { // Substitua por seu endpoint real
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nome, email, telefone, categoria })
                });

                if (response.ok) {
                    const result = await response.json();
                    displayMessage('Inscrição realizada com sucesso! Em breve entraremos em contato.', 'success');
                    registrationForm.reset(); // Limpa o formulário
                } else {
                    const errorData = await response.json();
                    displayMessage(`Erro ao se inscrever: ${errorData.message || 'Tente novamente mais tarde.'}`, 'error');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                displayMessage('Erro de conexão. Verifique sua internet ou tente novamente.', 'error');
            }
            */

            // Para fins de demonstração, vamos simular um sucesso após um pequeno atraso
            displayMessage('Inscrição realizada com sucesso! Em breve entraremos em contato.', 'success');
            registrationForm.reset(); // Limpa o formulário

            // Opcional: Redirecionar após o sucesso (ex: para uma página de agradecimento)
            // setTimeout(() => {
            //     window.location.href = 'agradecimento.html';
            // }, 3000);
        });
    }

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`; // Adiciona a classe de tipo
        formMessage.classList.remove('hidden'); // Torna visível
    }

    function isValidEmail(email) {
        // Regex simples para validação de e-mail
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Smooth scroll para links da navbar
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});