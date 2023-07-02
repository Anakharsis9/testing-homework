import { screen, fireEvent } from "@testing-library/react";
import events from "@testing-library/user-event";

import { renderApp } from "../helpers/renderApp";

describe("В шапке", () => {
  const basename = "/hw/store";

  it("отображается ссылка на главную", () => {
    const { getByTestId } = renderApp(basename);
    expect(getByTestId("main").textContent).toEqual("Example store");
  });
  it("отображается ссылка на каталог", () => {
    const { getByTestId } = renderApp(basename);
    expect(getByTestId("catalog").textContent).toEqual('Catalog');
  });

  it("отображается ссылка на доставку", () => {
    const { getByTestId } = renderApp(basename);
    expect(getByTestId("delivery").textContent).toEqual('Delivery');
  });
  it("отображается ссылка на контакты", () => {
    const { getByTestId } = renderApp(basename);
    expect(getByTestId("contacts").textContent).toEqual('Contacts');
  });
  it("отображается ссылка на корзину", () => {
    const { getByTestId } = renderApp(basename);
    expect(getByTestId("cart").textContent).toEqual("Cart");
  });
});
