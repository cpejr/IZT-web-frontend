import React, { createContext, useContext, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

const LanguageContext = createContext();

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

export function useGlobalLanguage() {
  return useContext(LanguageContext);
}

LanguageProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
