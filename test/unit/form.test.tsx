import { screen, fireEvent, waitFor, render } from "@testing-library/react";
import events from "@testing-library/user-event";

import { renderApp } from "../helpers/renderApp";
import React from "react";
import { MemoryRouter } from "react-router";
import { Form } from "@/client/components/Form";

const MockForm = () => {
  return (
    <MemoryRouter initialEntries={[""]} initialIndex={0}>
      <Form onSubmit={() => {}} />
    </MemoryRouter>
  );
};

describe("Проверка формы", () => {
  it("Все поля обязательны", async () => {
    render(<MockForm />);

    const nameInput = screen.getByTestId("f-name");
    const phoneInput = screen.getByTestId("f-phone");
    const addressInput = screen.getByTestId("f-address");

    const submitBtn = screen.getByTestId("f-submit");

    await events.click(submitBtn);

    expect(nameInput).toHaveClass("is-invalid");
    expect(phoneInput).toHaveClass("is-invalid");
    expect(addressInput).toHaveClass("is-invalid");
  });

  it("Номер должен содержать 10 цифр", async () => {
    render(<MockForm />);

    const phoneInput = screen.getByTestId("f-phone");

    await events.type(phoneInput, "1");
    const submitBtn = screen.getByTestId("f-submit");

    await events.click(submitBtn);

    expect(phoneInput).toHaveClass("is-invalid");
  });

  it("Все поля заполнены корректно", async () => {
    render(<MockForm />);

    const nameInput = screen.getByTestId("f-name");
    const phoneInput = screen.getByTestId("f-phone");
    const addressInput = screen.getByTestId("f-address");

    await events.type(nameInput, "Иван");
    await events.type(phoneInput, "0123456789");
    await events.type(addressInput, "Улица Пушкина");

    const submitBtn = screen.getByTestId("f-submit");

    await events.click(submitBtn);

    expect(nameInput).not.toHaveClass("is-invalid");
    expect(phoneInput).not.toHaveClass("is-invalid");
    expect(addressInput).not.toHaveClass("is-invalid");
  });

});
