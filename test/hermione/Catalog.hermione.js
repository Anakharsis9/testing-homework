const { expect, assert } = require("chai");

describe("Каталог", async function () {
  it("У товара в каталоге отображается название, цена и ссылка", async function () {
    await this.browser.url("http://localhost:3000/hw/store/catalog");

    const productName = await this.browser.$(".ProductItem-Name").getText();
    assert.notEqual(productName, "", "Название товара не должно быть пустым");

    const productPrice = await this.browser.$(".ProductItem-Price").getText();
    assert.notEqual(productPrice, "", "Цена товара не должно быть пустым");

    const productsLink = await this.browser
      .$(".ProductItem-DetailsLink")
      .getText();
    assert.equal(
      productsLink,
      "Details",
      "Текст кнопки должен быть равен 'Details'"
    );
  });

  it("На странице товара отображаются: название товара, его описание, цена, цвет, материал и кнопка", async function () {
    await this.browser.url("http://localhost:3000/hw/store/catalog/1");

    const productName = await this.browser.$(".ProductDetails-Name");
    const productNameIsExist = await productName.isExisting();
    assert.isTrue(productNameIsExist, "Название товара должен быть отабражен");
    const productNameText = await productName.getText();
    assert.notEqual(productNameText, "", "Название товара не должно быть пустым");

    const productDescription = await this.browser
      .$(".ProductDetails-Description")
      .getText();
    assert.notEqual(
      productDescription,
      "",
      "Описание товара не должно быть пустым"
    );

    const productPrice = await this.browser
      .$(".ProductDetails-Price")
      .getText();
    assert.notEqual(productPrice, "", "Цена товара не должно быть пустым");

    const productColor = await this.browser
      .$(".ProductDetails-Color")
      .getText();
    assert.notEqual(productColor, "", "Цвет товара не должно быть пустым");

    const productMaterial = await this.browser
      .$(".ProductDetails-Material")
      .getText();
    assert.notEqual(
      productMaterial,
      "",
      "Материал товара не должно быть пустым"
    );

    const addToCartBtn = await this.browser
      .$(".ProductDetails-AddToCart")
      .getText();
    assert.equal(
      addToCartBtn,
      "Add to Cart",
      "Текст кнопки должен быть равен 'Add to Cart'"
    );
  });

  it("Cодержимое корзины должно сохраняться между перезагрузками страницы", async function () {
    await this.browser.url("http://localhost:3000/hw/store/catalog/0");

    const addToCartBtn = await this.browser.$(".ProductDetails-AddToCart");
    await addToCartBtn.click();

    const cartLabelText = await this.browser
      .$("a[data-testid='cart']")
      .getText();

    assert.equal(cartLabelText, "Cart (1)", "Корзина должна обновиться");

    await this.browser.url("http://localhost:3000/hw/store/catalog");

    const updatedCartLabelText = await this.browser
      .$("a[data-testid='cart']")
      .getText();

    assert.equal(
      updatedCartLabelText,
      "Cart (1)",
      "Состояние корзины должно сохранится"
    );
  });
  it("Добавить товар в корзину", async function () {
    await this.browser.url("http://localhost:3000/hw/store/catalog/0");

    const addToCartBtn = await this.browser.$(".ProductDetails-AddToCart");
    await addToCartBtn.click();
    await addToCartBtn.click();

    const cartBadge = await this.browser.$(".CartBadge").isExisting();
    assert.isTrue(
      cartBadge,
      "Должно отображаться сообщение 'Item in cart' на странице товара"
    );

    const catalogLink = await this.browser.$("a[data-testid='catalog']");
    await catalogLink.click();

    const catalogCartBadge = await this.browser.$(".CartBadge").isExisting();
    assert.isTrue(
      catalogCartBadge,
      "Должно отображаться сообщение 'Item in cart' на странице списка товаров"
    );

    const cartLabel = await this.browser.$("a[data-testid='cart']");
    await cartLabel.click();

    const productCount = await this.browser.$(".Cart-Count").getText();

    assert.equal(productCount, "2", "Количество товара должно быть равно 2");
    // await this.browser.assertView("cart-added-item", "body");
  });
});
