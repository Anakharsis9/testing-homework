const { assert } = require("chai");

describe("Проверить адаптивность верстки при 1920, 1280, 768, 576", async function () {
//   it("Главная страница адаптируется при 1920", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");
//     await this.browser.assertView("plain", "body");
//   });

//   it("Главная страница адаптируется при 1280", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");

//     await this.browser.setWindowSize(1280, 1080);
//     await this.browser.assertView("main-1280", "body");
//   });

//   it("Главная страница адаптируется при 768", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");

//     await this.browser.setWindowSize(768, 1080);
//     await this.browser.assertView("main-768", "body");
//   });
  
//   it("Главная страница адаптируется при 576", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");

//     await this.browser.setWindowSize(576, 1080);
//     await this.browser.assertView("main-576", "body");
//   });
  it("Страница каталога адаптируется при 1920", async function () {
    await this.browser.url("http://localhost:3000/hw/store/");
    await this.browser.assertView("plain", "body");
  });

//   it("Страница каталога адаптируется при 1280", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");

//     await this.browser.setWindowSize(1280, 1080);
//     await this.browser.assertView("main-1280", "body");
//   });

//   it("Страница каталога адаптируется при 768", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");

//     await this.browser.setWindowSize(768, 1080);
//     await this.browser.assertView("main-768", "body");
//   });

//   it("Страница каталога адаптируется при 576", async function () {
//     await this.browser.url("http://localhost:3000/hw/store/");

//     await this.browser.setWindowSize(576, 1080);
//     await this.browser.assertView("main-576", "body");
//   });
});
