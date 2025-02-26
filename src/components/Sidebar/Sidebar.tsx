import React, { useState } from "react";
import styled from "styled-components";
import {
  FaChartBar,
  FaEnvelope,
  FaUser,
  FaCalendar,
  FaSearch,
  FaFolder,
  FaCog,
} from "react-icons/fa";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const menuList: MenuItem[] = [
  { title: "Dashboard", icon: <FaChartBar />, path: "/dashboard" },
  { title: "Mensagens", icon: <FaEnvelope />, path: "/mensagens" },
  { title: "Usuários", icon: <FaUser />, path: "/usuarios" },
  { title: "Calendário", icon: <FaCalendar />, path: "/calendario" },
  { title: "Pesquisar", icon: <FaSearch />, path: "/pesquisar" },
  { title: "Arquivos", icon: <FaFolder />, path: "/arquivos" },
  { title: "Configurações", icon: <FaCog />, path: "/configuracoes" },
];

const SidebarContainer = styled.div<{ $open: boolean }>`
  width: ${(props) => (props.$open ? "250px" : "75px")};
  height: 100vh;
  background-color: #3b0764;
  color: #ffffff;
  padding: 20px 10px 20px 20px;
  transition: width 0.4s ease-in-out;
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: -20px;
  color: #ffffff;
  background-color: #5b21b6;
  border: 2px solid #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const MenuItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #9333ea;
  }

  svg {
    font-size: 20px;
  }
`;

const SidebarText = styled.span<{ $open: boolean }>`
  display: ${(props) => (props.$open ? "inline" : "none")};
`;

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <SidebarContainer data-testid="sidebar-container" $open={open}>
      <ToggleButton onClick={() => setOpen(!open)}>
        {open ? "<" : ">"}
      </ToggleButton>

      <MenuList>
        <h2>Code Crux</h2>

        {menuList.map((item) => (
          <MenuItemContainer key={item.title} role="img">
            {item.icon}
            <SidebarText $open={open}>{item.title}</SidebarText>
          </MenuItemContainer>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;
