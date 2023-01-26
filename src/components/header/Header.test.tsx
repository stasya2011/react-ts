import { screen, render } from "@testing-library/react";
import Header from "./Header";

it("test", () => {
  render(<Header />);
  const linkElement = screen.getByRole("link", { name: /about/i });
  expect(linkElement).toBeInTheDocument();
});
