import './experience.css';
import { AccordionSection } from '../AccordionSection/AccordionSection';

export const Experience = ({ experienceList }) => {
    return (
        <AccordionSection title="Experiências Profissionais">
            <ul className="experience">
                {experienceList.map((experience, index) => {
                    const startDate = experience.period?.start || '--'; // Se 'start' não existir, usa '--' como valor padrão
                    const endDate = experience.period?.end || '--'; // Se 'end' não existir, usa '--' como valor padrão

                    return (
                        <li key={index}>
                            <h3 className="title">{experience.name}</h3>
                            <h4 className="institution">{experience.institution}</h4>
                            <p className="period">Início: {startDate} Fim: {endDate}</p>
                            <p>{experience.description}</p>
                        </li>
                    );
                })}
            </ul>
        </AccordionSection>
    );
};
