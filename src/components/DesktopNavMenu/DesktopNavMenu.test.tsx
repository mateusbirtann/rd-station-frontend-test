import { render, screen } from "@testing-library/react";
import DesktopNavMenu from "./index";
import navMenuData from "@/data/navMenuData";
import "@testing-library/jest-dom";

describe("DesktopNavMenu", () => {
  beforeEach(() => {
    render(<DesktopNavMenu menuData={navMenuData} />);
  });

  it("should render correctly", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  it("should render correct number of NavMenuTrigger and NavMenuContent", () => {
    const triggers = screen.getAllByTestId("nav-menu-trigger");
    const contents = screen.getAllByTestId("nav-menu-content");

    expect(triggers.length).toBe(navMenuData.length);
    expect(contents.length).toBe(
      navMenuData.filter((item) => item.content).length
    );
  });

  it("should render two buttons", () => {
    const buttons = screen.getAllByRole("button", { name: /BUTTON/i });
    expect(buttons.length).toBe(2);
  });
});
