import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import PropTypes from 'prop-types';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const storedLanguage = localStorage.getItem('globalLanguage');
  const [globalLanguage, setGlobalLanguage] = useState(storedLanguage || 'PT');

  useEffect(() => {
    localStorage.setItem('globalLanguage', globalLanguage);
  }, [globalLanguage]);

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
