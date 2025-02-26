import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";
import React from "react";

describe("Test Sidebar", () => {
  test("renders sidebar with menu items", () => {
    render(<Sidebar />);

    expect(screen.getByText(/Code Crux/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mensagens/i)).toBeInTheDocument();
    expect(screen.getByText(/Usuários/i)).toBeInTheDocument();
    expect(screen.getByText(/Calendário/i)).toBeInTheDocument();
    expect(screen.getByText(/Pesquisar/i)).toBeInTheDocument();
    expect(screen.getByText(/Arquivos/i)).toBeInTheDocument();
    expect(screen.getByText(/Configurações/i)).toBeInTheDocument();
  });

  test("toggles sidebar width when toggle button is clicked", () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole("button");
    const siderbar = screen.getByTestId("sidebar-container");

    expect(siderbar).toHaveStyle("width: 250px");

    fireEvent.click(toggleButton);
    expect(siderbar).toHaveStyle("width: 75px");

    fireEvent.click(toggleButton);
    expect(siderbar).toHaveStyle("width: 250px");
  });

  test("shows icons and titles when the sider is opne", () => {
    render(<Sidebar />);

    const sidebarText = screen.getByText(/Dashboard/i);

    expect(sidebarText).toBeInTheDocument();

    const icons = screen.getAllByRole("img");

    expect(icons.length).toBe(7);
  });

  test("hides text when the sidebar is closed", () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole("button");

    fireEvent.click(toggleButton);

    const sidebarText = screen.getByText(/Dashboard/i);

    expect(sidebarText).toHaveStyle("display: none");
  });
});
