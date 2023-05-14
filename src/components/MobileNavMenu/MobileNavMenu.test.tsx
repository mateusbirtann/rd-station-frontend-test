import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNavMenu from "./index";
import navMenuData from "@/data/navMenuData"

jest.mock("@/data/navMenuData", () => [
  { title: "Menu 1" },
  {
    title: "Menu 2",
    content: [
      {
        subTitle: "METODOLOGIA",
        links: [
          {
            text: "Tudo sobre Inbound Marketing",
            href: "https://www.rdstation.com/",
          },
        ],
      },
    ],
  },
]);

describe("MobileNavMenu", () => {
  it("should render correctly", () => {
    const { getByRole } = render(<MobileNavMenu menuData={navMenuData}/>);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should open and close the menu when the menu button is clicked", async () => {
    const { getByRole, findByText, queryByText } = render(<MobileNavMenu menuData={navMenuData}/>);
    const menuButton = getByRole("button");

    fireEvent.click(menuButton);
    const menuItem1 = await findByText("Menu 1");
    expect(menuItem1).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(queryByText("Menu 1")).not.toBeInTheDocument();
  });

  it('should render the AccordionNavMenu for "Menu 2"', async () => {
    const { getByRole, findByText } = render(<MobileNavMenu menuData={navMenuData}/>);
    const menuButton = getByRole("button");

    fireEvent.click(menuButton);

    const menuItem2 = await findByText("Menu 2");
    fireEvent.click(menuItem2);

    expect(await findByText("METODOLOGIA")).toBeInTheDocument();
  });

  it("should display the menu items", async () => {
    const { getByRole, findByText } = render(<MobileNavMenu menuData={navMenuData}/>);
    const menuButton = getByRole("button");

    fireEvent.click(menuButton);
    expect(await findByText("Menu 1")).toBeVisible();
    expect(await findByText("Menu 2")).toBeVisible();
  });
});
