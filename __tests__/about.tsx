/**
 * @jest-environment jsdom
 */
import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import AboutPage from "@/app/about/page";

describe("About", () => {
  it("renders a heading", () => {
    render(<AboutPage />);

    const heading = screen.getByRole("heading", {
      name: /about/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
