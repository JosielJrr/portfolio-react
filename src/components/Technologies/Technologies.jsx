import './technologies.css';
import { AccordionSection } from '../AccordionSection/AccordionSection';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiSass,
    SiTailwindcss,
    SiBootstrap,
    SiFigma,
    SiGit,
    SiMysql
} from "react-icons/si";

export const Technologies = () => {

    const technologies = [
        {
            id: "html",
            name: "HTML",
            icon: <SiHtml5 />,
            description: "Linguagem de marcação usada para estruturar o conteúdo da web."
        },
        {
            id: "css",
            name: "CSS",
            icon: <SiCss3 />,
            description: "Linguagem de estilo usada para definir o visual de páginas web."
        },
        {
            id: "sass",
            name: "SASS",
            icon: <SiSass />,
            description: "Pré-processador CSS que oferece recursos como mixins, funções e aninhamento."
        },
        {
            id: "tailwind",
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            description: "Framework CSS utilitário para criar interfaces personalizadas de forma rápida."
        },
        {
            id: "bootstrap",
            name: "Bootstrap",
            icon: <SiBootstrap />,
            description: "Framework CSS com componentes prontos para criar interfaces responsivas."
        },
        {
            id: "js",
            name: "JavaScript",
            icon: <SiJavascript />,
            description: "Linguagem de programação usada para adicionar interatividade às páginas web."
        },
        {
            id: "ts",
            name: "TypeScript",
            icon: <SiTypescript />,
            description: "Superset do JavaScript com tipagem estática e segurança adicional."
        },
        {
            id: "react",
            name: "React",
            icon: <SiReact />,
            description: "Biblioteca JavaScript para criar interfaces baseadas em componentes."
        },
        {
            id: "next",
            name: "Next.js",
            icon: <SiNextdotjs />,
            description: "Framework React para aplicações web com renderização no servidor e otimização automática."
        },
        {
            id: "angular",
            name: "Angular",
            icon: <SiAngular />,
            description: "Framework TypeScript para desenvolver interfaces baseadas em componentes."
        },
        {
            id: "figma",
            name: "Figma",
            icon: <SiFigma />,
            description: "Ferramenta de design colaborativo para criar e prototipar interfaces."
        },
        {
            id: "git",
            name: "Git",
            icon: <SiGit />,
            description: "Sistema de controle de versão para rastrear mudanças no código e facilitar a colaboração."
        },
        {
            id: "mysql",
            name: "MySQL",
            icon: <SiMysql />,
            description: "Sistema de banco de dados relacional usado para armazenar e gerenciar dados."
        }
    ];

    return (
        <AccordionSection title="Tecnologias">
            <section>
                <div className="technologies-grid">
                    {technologies.map((tech) => (
                        <div className="technology-card" key={tech.id}>
                            <div className="technology-icon">
                                {tech.icon}
                            </div>

                            <div className="technology-info">
                                <h3>{tech.name}</h3>
                                <p className="mobile-hidden">{tech.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AccordionSection>
    );
};
