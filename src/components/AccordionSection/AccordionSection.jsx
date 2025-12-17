import './accordionSection.css';
import { useState } from 'react';

export const AccordionSection = ({ title, children }) => {
    // Estado que controla se o accordion está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false)

    return (
        // Adiciona a classe 'open' dinamicamente quando isOpen for true
        <section className={`accordion ${isOpen ? 'open' : ''}`}>
            {/* Botão que alterna o estado de aberto/fechado ao ser clicado */}
            <button className="trigger" type="button" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
            </button>
            <div className="content">
                {children}
            </div>
        </section>
    );
};
