import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CatalogLink from "~/app/_components/menu/catalogLink";

describe("CatalogLink Component", () => {
  it("renders link with correct href and text", () => {
    render(<CatalogLink />);

    const link = screen.getByRole("link", { name: /каталог товаров/i });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/catalog");
  });
});
