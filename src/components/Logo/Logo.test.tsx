// components/Logo.test.tsx
import { render } from "@testing-library/react";
import Logo from "./index";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("Logo", () => {
  it("renders the default logo", () => {
    const { getByAltText } = render(<Logo />);
    const logo = getByAltText("RD Station logo");
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute("src")).toBe("/logo-default.png");
  });

  it("renders the black and white logo", () => {
    const { getByAltText } = render(<Logo variant="bw" />);
    const logo = getByAltText("RD Station logo");
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute("src")).toBe("/logo-bw.svg");
  });

  it("applies the given className", () => {
    const { container } = render(<Logo className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
