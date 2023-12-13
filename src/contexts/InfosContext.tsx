import * as React from 'react';

// import { Container } from './styles';

interface Props {
  tema: string;
}

interface TypeChildren {
  children: React.ReactNode;
}

export const InfosContext = React.createContext({} as Props);

export const InfosProvider = ({children}: TypeChildren) => {
  
  const [tema, setTema] = React.useState('light');

  return <InfosContext.Provider value={{tema}}>{children}</InfosContext.Provider>;
}

export default InfosProvider;