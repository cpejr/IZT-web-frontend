import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import {
  Menu,
  MenuItem,
  MenuLink,
  CarWheel,
  Cogs,
  BackwardTime,
} from './Styles';
import { TranslateText } from './translations';

export default function SoftwareLateralMenu() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <Menu>
      <MenuItem>
        <Cogs />
        <MenuLink
          as={Link}
          to="/software/analise-estabilidade"
          active={activeMenuItem === 0}
          onClick={() => handleMenuItemClick(0)}
        >
          {translations.stabilityAnalysis}
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <CarWheel />
        <MenuLink
          as={Link}
          to="/software/perfil"
          active={activeMenuItem === 1}
          onClick={() => handleMenuItemClick(1)}
        >
          {translations.profile}
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <BackwardTime />
        <MenuLink
          as={Link}
          to="/software/secao-relatorio"
          active={activeMenuItem === 2}
          onClick={() => handleMenuItemClick(2)}
        >
          {translations.reports}
        </MenuLink>
      </MenuItem>
    </Menu>
  );
}
