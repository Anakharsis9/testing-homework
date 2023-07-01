import { render } from "@testing-library/react";

import React from "react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

import { Application } from "@/client/Application";
import { initStore } from "@/client/store";
import { CartApi, ExampleApi } from "@/client/api";

export const renderApp = (route: string) => {
  const basename = '/hw/store';
  
  const api = new ExampleApi(basename);
  const cart = new CartApi();
  const store = initStore(api, cart);
  
  const application = (
    <MemoryRouter initialEntries={[route]} initialIndex={0}>
      <Provider store={store}>
        <Application />
      </Provider>
    </MemoryRouter>
  );
  
  return {
    ...render(application)
  };
};

