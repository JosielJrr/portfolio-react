import './App.css';
import { Header } from './components/Header/Header';
import { Technologies } from './components/Technologies/Technologies';
import { Languages } from './components/Languages/Languages';
import { Education } from './components/Education/Education';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Experience } from './components/Experience/Experience';

import { useState, useEffect } from 'react';

function App() {
  // Cria o estado 'profile' pra armazenar os dados do JSON
  const [profile, setProfile] = useState(null);  // Começa como null, porque ainda não temos os dados carregados

  useEffect(() => {
    // Faz requisição para o arquivo profile.json da pasta public
    fetch('/portfolio-react/profile.json')
      .then((res) => res.json()) // Converte a resposta para JSON
      .then(setProfile); // Atualiza o estado com os dados carregados
  }, []); // Executa uma vez ao montar o componente 

  // Enquanto os dados não forem carregados, exibe a mensagem
  if (!profile) return <p>Carregando...</p>;

  return (
    <div className='main'>
      <Header
        photo={profile.photo}
        name={profile.name}
        job={profile.job}
        location={profile.location}
        linkedin={profile.linkedin}
        resume={profile.resume}
        email={profile.email}
      />
      <Technologies />
      <Languages languageList={profile.languages} />
      <Education educationList={profile.education} />
      <Portfolio projectList={profile.portfolio} />
      <Experience experienceList={profile.experience} />
    </div>
  )
}

export default App;
