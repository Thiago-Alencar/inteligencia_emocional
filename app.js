/**
 * Função para realizar a pesquisa e exibir os resultados.
 */
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem de erro
    if (!campoPesquisa) {
        section.innerHTML = "<p>Vamos começar! Digite uma estratégia que você gostaria de desenvolver para dar o próximo passo.</p>";
        return;
    }

    // Converte o valor da pesquisa para minúsculas para comparação case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (const dado of dados) {
        const titulo = dado.titulo.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        const tags = dado.tags.toLowerCase();

        // Verifica se o campo de pesquisa está presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento para o resultado
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" onclick="informarLinkExterno(event)">Mais informações</a>
            </div>
        `;
        }
    }

    // Se não houver resultados, exibe uma mensagem de "nada encontrado"
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

/**
 * Função para exibir uma mensagem quando o usuário é redirecionado para um link externo.
 * @param {Event} event - O evento de clique no link.
 */
function informarLinkExterno(event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Exibe uma mensagem informativa ao usuário
    alert("Você está prestes a ser redirecionado para um site externo.");

    // Obtém o URL do link clicado
    const url = event.target.href;

    // Redireciona o usuário para o URL
    window.open(url, "_blank");
}
