import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./index";

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => <img src="/video.png" alt="video" />,
}));

jest.mock("react-youtube", () => ({
  __esModule: true,
  default: ({ videoId }: { videoId: string }) => (
    <div data-testid="youtube-player">{videoId}</div>
  ),
}));

jest.mock("@/hooks/useWindowSize", () => ({
  __esModule: true,
  default: () => ({
    width: 800,
    height: 600,
  }),
}));

describe("Modal Component", () => {
  it("renders properly", () => {
    render(<Modal className="custom-class" />);

    const modalElement = screen.getByAltText(/video/i);
    expect(modalElement).toBeInTheDocument();

    fireEvent.click(modalElement);

    const closeButton = screen.getByRole("button", { name: /Fechar video/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("opens and closes the modal", () => {
    render(<Modal />);

    const modalElement = screen.getByAltText(/video/i);
    fireEvent.click(modalElement);

    const youtubePlayer = screen.getByTestId("youtube-player");
    expect(youtubePlayer.textContent).toBe("lGCesaaLi4s");

    const closeButton = screen.getByRole("button", { name: /Fechar video/i });
    fireEvent.click(closeButton);

    expect(screen.queryByTestId("youtube-player")).toBeNull();
  });
});
