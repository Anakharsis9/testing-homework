const { assert } = require("chai");

describe("Проверить адаптивность верстки главной при 1920, 1280, 768, 575", async function () {
    it("Адаптив при 1920", async function () {
      await this.browser.url("http://localhost:3000/hw/store/");
      await this.browser.assertView("plain", "body");
    });

    it("Адаптив при 1280", async function () {
      await this.browser.url("http://localhost:3000/hw/store/");

      await this.browser.setWindowSize(1280, 1080);
      await this.browser.assertView("main-1280", "body");
    });

    it("Адаптив при 768", async function () {
      await this.browser.url("http://localhost:3000/hw/store/");

      await this.browser.setWindowSize(768, 1080);
      await this.browser.assertView("main-768", "body");
    });

    it("Адаптив при 575", async function () {
      await this.browser.url("http://localhost:3000/hw/store/");

      await this.browser.setWindowSize(575, 1080);
      await this.browser.assertView("main-575", "body");
    });
});
