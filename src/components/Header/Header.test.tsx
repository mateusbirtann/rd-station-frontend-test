import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "@/components/Header";
import navMenuData from "@/data/navMenuData";
import { NavMenuProps } from "@/types";

jest.mock("@/components/Logo", () => {
  const Logo = () => <div>Logo</div>;
  Logo.displayName = "Logo";
  return Logo;
});

jest.mock("@/components/MobileNavMenu", () => {
  const MobileNavMenu = ({ menuData }: { menuData: NavMenuProps[] }) => (
    <div>
      {menuData.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
  MobileNavMenu.displayName = "MobileNavMenu";
  return MobileNavMenu;
});

jest.mock("@/components/DesktopNavMenu", () => {
  const DesktopNavMenu = ({ menuData }: { menuData: NavMenuProps[] }) => (
    <div>
      {menuData.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
  DesktopNavMenu.displayName = "DesktopNavMenu";
  return DesktopNavMenu;
});

describe("Header component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders Logo component", () => {
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });

  it('renders MobileNavMenu component with correct menu titles', () => {
    navMenuData.forEach(item => {
      const matchingElements = screen.getAllByText(item.title);
      expect(matchingElements.length).toBeGreaterThanOrEqual(1);
    });
  });
  
  it('renders DesktopNavMenu component with correct menu titles', () => {
    navMenuData.forEach(item => {
      const matchingElements = screen.getAllByText(item.title);
      expect(matchingElements.length).toBeGreaterThanOrEqual(1);
    });
  });
});
