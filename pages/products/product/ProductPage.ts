import {PageObject} from '../../PageObject';
import {expect, Locator, Page} from '@playwright/test';

export class ProductPage extends PageObject {
  protected readonly backToProductsButton: Locator;
  protected readonly addToCartButton: Locator;
  protected readonly productName: Locator;
  protected readonly price: Locator;
  protected readonly description: Locator;
  protected readonly picture: Locator;

  constructor(page: Page) {
    super(page, '/inventory-item.html?id={id}');
    this.backToProductsButton = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    this.addToCartButton = page.locator("//button[@id='back-to-products']");
    this.productName = page.locator("//div[@class='inventory_details_name large_size']");
    this.price = page.locator("//div[@class='inventory_details_price']");
    this.description = page.locator("//div[@class='inventory_details_desc large_size']");
    this.picture = page.locator("//img[@alt='Sauce Labs Backpack']");
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }

  async checkElementsVisibility() {
    await expect(this.productName).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.description).toBeVisible();
    await expect(this.picture).toBeVisible();
  }
}
