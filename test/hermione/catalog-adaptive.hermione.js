const mockedProducts = [
  {
    id: 0,
    name: "Practical Salad",
    price: 283
  },
  {
    id: 1,
    name: "Generic Bike",
    price: 484
  },
  {
    id: 2,
    name: "Licensed Towels",
    price: 281
  },
  {
    id: 3,
    name: "Fantastic Tuna",
    price: 734
  }
];
describe("Проверить адаптивность верстки 'каталога' при 1920, 1280, 768, 576", async function () {
  it("Адаптив при 1920", async function () {
    const getProductsMock = await this.browser.mock(
      "http://localhost:3000/hw/store/api/products",
      {
        method: "get"
      }
    );
    getProductsMock.respond(mockedProducts);

    await this.browser.url("http://localhost:3000/hw/store/catalog");
    await this.browser.assertView("catalog-1920", "body");

    await this.browser.mockRestoreAll();
  });

  it("Страница каталога адаптируется при 1280", async function () {
    const getProductsMock = await this.browser.mock(
      "http://localhost:3000/hw/store/api/products",
      {
        method: "get"
      }
    );
    getProductsMock.respond(mockedProducts);
    await this.browser.url("http://localhost:3000/hw/store/catalog");

    await this.browser.setWindowSize(1280, 1080);
    await this.browser.assertView("catalog-1280", "body");

    await this.browser.mockRestoreAll();
  });

  it("Страница каталога адаптируется при 768", async function () {
    const getProductsMock = await this.browser.mock(
      "http://localhost:3000/hw/store/api/products",
      {
        method: "get"
      }
    );
    getProductsMock.respond(mockedProducts);
    await this.browser.url("http://localhost:3000/hw/store/catalog");

    await this.browser.setWindowSize(768, 1080);
    await this.browser.assertView("catalog-768", "body");

    await this.browser.mockRestoreAll();
  });

  it("Страница каталога адаптируется при 576", async function () {
    const getProductsMock = await this.browser.mock(
      "http://localhost:3000/hw/store/api/products",
      {
        method: "get"
      }
    );
    getProductsMock.respond(mockedProducts);
    await this.browser.url("http://localhost:3000/hw/store/catalog");

    await this.browser.setWindowSize(576, 1080);
    await this.browser.assertView("catalog-576", "body");

    await this.browser.mockRestoreAll();
  });
});
