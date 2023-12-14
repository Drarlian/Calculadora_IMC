import * as React from 'react';

// import { Container } from './styles';

interface Props {
  tema: string;
  alteraTema: () => void;
}

interface TypeChildren {
  children: React.ReactNode;
}

export const InfosContext = React.createContext({} as Props);

export const InfosProvider = ({children}: TypeChildren) => {
  
  const [tema, setTema] = React.useState(() => pegarTema());

  function alteraTema(){
    let newTema = tema === 'light'? 'dark': 'light';

    setTema(() => {
      salvarTema(newTema);
      return newTema;
    });
  }

  function salvarTema(temaTemp: string){
    localStorage.setItem('Tema', JSON.stringify(temaTemp));
  }

  function pegarTema(){
    let temaLocal = localStorage.getItem('Tema');
    if (temaLocal){
        return JSON.parse(temaLocal);
    }
    return 'light';

  }

  return <InfosContext.Provider value={{tema, alteraTema}}>{children}</InfosContext.Provider>;
}

export default InfosProvider;