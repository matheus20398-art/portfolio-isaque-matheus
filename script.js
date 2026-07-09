// Aguarda o HTML carregar totalmente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CONFIGURAÇÃO DOS BOTÕES ---

    // Botão "Ver Projetos" (Rola a página até a seção de projetos)
    const btnProjetos = document.getElementById('btnProjetos');
    if (btnProjetos) {
        btnProjetos.addEventListener('click', () => {
            const secaoProjetos = document.getElementById('projetos');
            secaoProjetos.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botão "Entrar em contato" (Abre o WhatsApp)
    const btnContato = document.getElementById('btnContato');
    if (btnContato) {
        btnContato.addEventListener('click', () => {
            const numero = "5581997118224"; // Ajustei para o número que está no seu texto do HTML
            const mensagem = encodeURIComponent("Olá Isaque! Vi seu portfólio e gostaria de conversar sobre um projeto.");
            const url = `https://wa.me/${numero}?text=${mensagem}`;
            
            window.open(url, '_blank');
        });
    }

    // --- 2. EXTRA: EFEITO VISUAL ---
    
    // Adiciona uma animação simples de "fade-in" nos projetos ao rolar a página
    const projetos = document.querySelectorAll('.projeto');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    projetos.forEach(projeto => {
        // Estilo inicial via JS para não precisar mexer no CSS agora
        projeto.style.opacity = "0";
        projeto.style.transform = "translateY(20px)";
        projeto.style.transition = "all 0.6s ease-out";
        observer.observe(projeto);
    });

});