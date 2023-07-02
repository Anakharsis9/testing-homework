describe("Проверить в гамбургер", async function () {
  it("при выборе элемента, гамбургер должен закрываться", async function () {
    await this.browser.url("http://localhost:3000/hw/store");
    await this.browser.setWindowSize(575, 1080);

    const hamburger = await this.browser.$("#hamburger");
    await hamburger.click();
    
    const links = await this.browser.$$(".nav-link");
    
    links[2].click();
    await this.browser.assertView("hamburger-closed", "body");
    
  });
});
