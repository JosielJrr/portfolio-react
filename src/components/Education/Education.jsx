import './education.css';
import { AccordionSection } from '../AccordionSection/AccordionSection';

export const Education = ({ educationList }) => {
    return (
        <AccordionSection title="Educação">
            <ul className="education">
                {educationList.map((education, index) => {
                    const startDate = education.period?.start || '--'; // Se 'start' não existir, usa '--' como valor padrão
                    const endDate = education.period?.end || '--'; // Se 'end' não existir, usa '--' como valor padrão
                    const hasCertificate = !!education.certificate; // Verifica se existe certificado (evita renderizar se for vazio ou null)

                    return (
                        <li key={index}>
                            <h3>{education.training} - {education.institution}</h3>
                            <p className="period">Início: {startDate} Fim: {endDate}</p>
                            {hasCertificate && (
                                <a
                                    href={education.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificate"
                                >
                                    Certificado - {education.training}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </AccordionSection>
    );
};
