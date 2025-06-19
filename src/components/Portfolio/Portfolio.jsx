import './portfolio.css';
import { AccordionSection } from '../AccordionSection/AccordionSection';

export const Portfolio = ({ projectList }) => {
    return (
        <AccordionSection title="Projetos">
            <ul className="portfolio">

                {projectList.map((project) => {
                    // Verifica se o projeto é do GitHub para aplicar classe com ícone do github
                    const isGithub = project.github === true;
                    const githubClass = isGithub ? 'title github' : '';

                    return (
                        <li key={project.name}>
                            <h3 className={githubClass}>{project.name}</h3>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                Ir para o Repositório
                            </a>
                        </li>
                    )
                })}
            </ul>
        </AccordionSection>
    )
}
