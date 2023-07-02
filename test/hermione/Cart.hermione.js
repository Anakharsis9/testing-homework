const { expect, assert } = require("chai");

const cartItemsMock = {
  key: "example-store-cart",
  data: { 0: { count: 1, name: "Awesome Car", price: 927 } }
};

const baseURL = "http://localhost:3000/hw/store";

describe("Корзина", async function () {
  it("если корзина пустая, должна отображаться ссылка на каталог товаров", async function () {
    await this.browser.url("http://localhost:3000/hw/store/cart");

    const linkText = await this.browser.$(".cart-body").$("a").getText();
    assert.equal(linkText, "catalog");
  });
  it("должна быть кнопка 'очистить корзину', по нажатию на которую все товары должны удаляться", async function () {
    const puppeteer = await this.browser.getPuppeteer();
    const [page] = await puppeteer.pages();

    await page.goto(baseURL);

    await page.evaluate(cartItemsMock => {
      window.localStorage.setItem(
        cartItemsMock.key,
        JSON.stringify(cartItemsMock.data)
      );
    }, cartItemsMock);

    await page.goto(baseURL + "/cart");

    const cartClearBtn = await this.browser.$(".Cart-Clear");
    const isClearBtnExist = await cartClearBtn.isExisting();
    assert.isTrue(isClearBtnExist, "должна быть кнопка 'очистить корзину'");

    await cartClearBtn.click();

    const cartTable = await this.browser.$(".Cart-Table").isExisting();
    assert.isFalse(cartTable, "все товары должны удаляться'");
  });
});
