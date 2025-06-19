import './languages.css';
import { AccordionSection } from '../AccordionSection/AccordionSection';

export const Languages = ({ languageList }) => {
    return (
        <AccordionSection title="Idiomas">
            <ul className="languages">
                {languageList.map((language, index) => (
                    <li key={index}>
                        {language}
                    </li>
                ))}
            </ul>
        </AccordionSection>
    );
};