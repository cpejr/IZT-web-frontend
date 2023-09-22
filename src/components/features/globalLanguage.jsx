import React, { createContext, useContext, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

// Crie o contexto
const LanguageContext = createContext();

// const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const [globalLanguage, setGlobalLanguage] = useState('PT');

  const value = useMemo(
    () => ({ globalLanguage, setGlobalLanguage }),
    [globalLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Crie um hook personalizado para acessar o contexto
export function useGlobalLanguage() {
  return useContext(LanguageContext);
}

LanguageProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
