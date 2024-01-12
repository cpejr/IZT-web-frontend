import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

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
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const navigate = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = [
    {
      id: 'stability',
      icon: <Cogs />,
      label: translations.stabilityAnalysis,
      path: '/software/analise-estabilidade',
    },
    {
      id: 'profile',
      icon: <CarWheel />,
      label: translations.profile,
      path: '/software/perfil',
    },
    {
      id: 'reports',
      icon: <BackwardTime />,
      label: translations.reports,
      path: '/software/secao-relatorio',
    },
  ];

  const handleMenuItemClick = (id, path) => {
    const index = menuItems.findIndex((item) => item.id === id);
    setActiveMenuItem(index);
    navigate(path);
  };

  return (
    <Menu>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          active={activeMenuItem === item.id}
          onClick={() => handleMenuItemClick(item.id, item.path)}
        >
          {React.cloneElement(item.icon, {
            onClick: () => handleMenuItemClick(item.id, item.path),
          })}
          <MenuLink onClick={() => handleMenuItemClick(item.id, item.path)}>
            {item.label}
          </MenuLink>
        </MenuItem>
      ))}
    </Menu>
  );
}
