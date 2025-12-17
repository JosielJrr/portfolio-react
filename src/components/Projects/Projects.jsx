import './projects.css';

import { AccordionSection } from '../AccordionSection/AccordionSection';
import { Loading } from '../Loading/Loading';

import { useEffect, useState } from 'react';

// Função para formatar o título
const formatTitle = (name) => {
    return name
        .replace(/[-_]/g, ' ')          // Troca - e _ por espaço
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitaliza a primeira letra de cada palavra
}

// Lista com os repositórios que você quer exibir no portfólio
const allowedRepos = [
    'curriculo-digital-react-scss',
    'spotify-homepage-react',
    'buzzfeed-quiz-angular',
    'playstation-store-angular',
    'nextgram-next-ts',
    'nextjs-todo-app',
    'react-todo-list',
    'react-calculator-app',
    'pokedex',
    'gitHub-profile-viewer',
    'spider-man-multiverse',
    'clone-hbo-max',
    'discord-homepage',
    'coffee-shop',
];

export const Projects = () => {

    const [repos, setRepos] = useState([]); // Estado para armazenar os repositórios a serem exibidos (inicialmente vazio)
    const [loading, setLoading] = useState(true); // Controla o estado da requisição à API do GitHub (true: carregando | false: finalizado)

    useEffect(() => {
        fetch('https://api.github.com/users/JosielJrr/repos?per_page=100') // Faz a requisição para a API do GitHub e pede até 100 repositórios
            .then(res => res.json()) // Converte a resposta da API para JSON
            .then(data => { // "data" é um array com TODOS os repositórios retornados pela API
                const filtered = data
                    .filter(repo => allowedRepos.includes(repo.name)) // Remove tudo que não esteja na lista allowedRepos
                    .map(repo => ({ // Converte cada repositório no formato exato que a UI precisa
                        id: repo.id,                 // usado como key no React
                        name: repo.name,             // título do card
                        description: repo.description, // texto do card
                        repoUrl: repo.html_url,      // link do GitHub
                        deployUrl: repo.homepage     // link do deploy (se existir)
                    }));

                setRepos(filtered); // Atualiza o estado com os repositórios finais
            })
            .catch(() => {
                setRepos([]); // Limpa a lista de repositórios em caso de erro ou falta de dados
            })
            .finally(() => {
                setLoading(false) // Indica o fim da requisição e desativa o loading
            })
    }, []); // Roda uma única vez quando o componente é montado


    // Enquanto a requisição estiver em andamento, exibe apenas o spinner
    if (loading) return <Loading />;

    return (
        <AccordionSection title="Projetos">
            <div className="projects-container">
                {/* Renderiza um card para cada repositório armazenado no estado */}
                {repos.map(repo => (
                    <div className="projects" key={repo.id}>
                        <h2 className="projects-title">{formatTitle(repo.name)}</h2>

                        <p className="projects-description">
                            {repo.description || 'Sem descrição'}
                        </p>

                        <div className="projects-links">
                            <a
                                href={repo.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repositório
                            </a>

                            {/* Só renderiza o link de deploy se ele existir */}
                            {repo.deployUrl && (
                                <a href={repo.deployUrl} target="_blank">
                                    Deploy
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </AccordionSection>
    );
};
