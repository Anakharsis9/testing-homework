import { screen, fireEvent } from "@testing-library/react";
import events from "@testing-library/user-event";

import { render } from "@testing-library/react";

import React from "react";
import { MemoryRouter } from "react-router";
import { Provider, useDispatch } from "react-redux";

import { Application } from "@/client/Application";
import { checkoutComplete, initStore, checkout } from "@/client/store";
import { CartApi, ExampleApi } from "@/client/api";

const basename = "/hw/store";

const api = new ExampleApi(basename);
const cart = new CartApi();

describe("Checkout", () => {
  it("отображается зеленая карточка успешного checkout", async () => {
    const store = initStore(api, cart);

    render(
      <MemoryRouter initialEntries={[""]} initialIndex={0}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    store.dispatch(checkoutComplete(1));

    await events.click(screen.getByTestId("cart"));

    expect(screen.getByTestId("successMessage")).toHaveClass("alert-success");
  });

  // it("Валидная форма отправляет checkout", async () => {
  //   const cartItemsMock = {
  //     key: "example-store-cart",
  //     data: { 0: { count: 1, name: "Awesome Car", price: 927 } }
  //   };

  //   const cart = new CartApi();

  //   window.localStorage.setItem(
  //     cartItemsMock.key,
  //     JSON.stringify(cartItemsMock.data)
  //   );

  //   const store = initStore(api, cart);

  //   render(
  //     <MemoryRouter initialEntries={[""]} initialIndex={0}>
  //       <Provider store={store}>
  //         <Application />
  //       </Provider>
  //     </MemoryRouter>
  //   );

  //   await events.click(screen.getByTestId("cart"));

  //   store.dispatch(
  //     checkout(
  //       {
  //         name: "Dayana",
  //         phone: "0123456789",
  //         address: "address"
  //       },
  //       cartItemsMock.data
  //     )
  //   );

  //   await events.click(screen.getByTestId("cart"));

  //   // screen.debug();

  //   // expect(screen.getByTestId("successMessage")).toBeInTheDocument();
  // });
});
