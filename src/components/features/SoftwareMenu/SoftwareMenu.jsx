import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Menu,
  MenuItem,
  MenuLink,
  CarWheel,
  Cogs,
  BackwardTime,
} from './Styles';

export default function SoftwareLateralMenu() {
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
          Análise de Estabilidade
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
          Perfil
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
          
          Relatórios
        </MenuLink>
      </MenuItem>
    </Menu>
  );
}
