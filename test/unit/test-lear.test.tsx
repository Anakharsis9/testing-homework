import { it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";

import { renderApp } from '../helpers/renderApp';

describe("Learn Test Case", () => {
  it('по адресу /catalog должна открываться страница "Каталог"', () => {
    const basename = '/hw/store';

    
    const renderedApp =  renderApp(basename);
    screen.logTestingPlaygroundURL();
  });
});
