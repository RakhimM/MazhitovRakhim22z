import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Decimal } from "@prisma/client/runtime/library";
import { TopUsersTable } from "~/app/_components/static/usersTopTable";

describe("TopUsersTable Component", () => {
  const users = [
    {
      id: "1",
      name: "Иван",
      surname: "Иванов",
      totalSpent: new Decimal(1500.75),
      purchasedItems: 10,
    },
    {
      id: "2",
      name: null,
      surname: null,
      totalSpent: new Decimal(0),
      purchasedItems: 0,
    },
  ];

  it("renders users data correctly with formatting", () => {
    render(<TopUsersTable users={users} />);

    // Ищем все элементы с текстом 'Иван' — это может быть имя и фамилия
    const ivanElements = screen.getAllByText("Иван");
    expect(ivanElements.length).toBeGreaterThan(0);

    const ivanovElements = screen.getAllByText("Иванов");
    expect(ivanovElements.length).toBeGreaterThan(0);

    expect(screen.getByText("1500.75 ₽")).toBeDefined();
    expect(screen.getByText("10")).toBeDefined();

    expect(screen.getAllByText("-").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("0 ₽")).toBeDefined();
    expect(screen.getByText("0")).toBeDefined();
  });
});
