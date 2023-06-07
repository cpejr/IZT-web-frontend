import React, { useState } from 'react';

import { FaCogs } from 'react-icons/fa';
import { GiCarWheel, GiBackwardTime } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { Menu, MenuItem, MenuLink } from './Styles';

export default function SoftwareLateralMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <Menu>
      <MenuItem>
        <FaCogs color="white" size={70} />
        <MenuLink
          as={Link}
          to=""
          active={activeMenuItem === 0}
          onClick={() => handleMenuItemClick(0)}
        >
          Análise de Estabilidade
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <GiCarWheel color="white" size={70} />
        <MenuLink
          as={Link}
          to=""
          active={activeMenuItem === 1}
          onClick={() => handleMenuItemClick(1)}
        >
          Perfil
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <GiBackwardTime color="white" size={80} />
        <MenuLink
          as={Link}
          to=""
          active={activeMenuItem === 2}
          onClick={() => handleMenuItemClick(2)}
        >
          Relatórios
        </MenuLink>
      </MenuItem>
    </Menu>
  );
}
