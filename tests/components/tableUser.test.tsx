import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AddCatalogPage from "~/app/addCatalog/page";

describe("AddCatalogPage", () => {
  it("рендерит форму с заголовком и полем ввода", () => {
    render(<AddCatalogPage />);
    
    // Проверяем заголовок
    expect(screen.getByText("Добавить каталог")).toBeDefined();

    // Проверяем поле input с плейсхолдером
    const input = screen.getByPlaceholderText("Введите название") as HTMLInputElement;
    expect(input).toBeDefined();
    expect(input.value).toBe("");

    // Симулируем ввод текста
    fireEvent.change(input, { target: { value: "Новый каталог" } });
    expect(input.value).toBe("Новый каталог");

    // Проверяем наличие кнопки отправки
    const button = screen.getByRole("button", { name: /добавить/i });
    expect(button).toBeDefined();
  });
});
