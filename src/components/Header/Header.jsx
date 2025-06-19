import './header.css';
import Perfil from '../../assets/image/my-photo.png';

export const Header = ({ photo, name, job, location, linkedin, resume, email }) => {
    return (
        <header>
            <img
                src={photo ? photo : Perfil} // Se 'photo' vier no JSON, usa ela. Senão, usa uma imagem padrão do projeto
                alt="Foto de Perfil"
                className="photo"
            />

            <h1 className="title">
                Olá, <br /> eu sou {name}
            </h1>

            <div className="information">
                <p className="job">{job}</p>
                <p className="location">{location}</p>

                <p className="linkedin">
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>

                <p className="resume">
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Currículo
                    </a>
                </p>


                {/* <p className="phone">
                    <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
                        {phone}
                    </a>
                </p> */}


                <p className="email">
                    <a href={`mailto:${email}`}>
                        {email}
                    </a>
                </p>
            </div>
        </header>
    );
};
