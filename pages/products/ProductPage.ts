import {PageObject} from '../PageObject';
import {expect, Locator, Page} from '@playwright/test';
import {ProductNames, takeScreenshotOfElement} from '../../helpers/common';

export class ProductPage extends PageObject {
  protected readonly productTitle: Locator;
  protected readonly productImage: Locator;
  protected readonly backToProduct: Locator;
  protected readonly removeButton: Locator;

  constructor(page: Page) {
    super(page, '/');
    this.productTitle = page.locator('.inventory_details_name');
    this.productImage = page.locator('.inventory_details_img');
    this.backToProduct = page.locator("//button[@id='back-to-products']");
    this.removeButton = page.locator("//button[@id='remove-sauce-labs-backpack']");
  }

  async addToProduct(cardName: ProductNames) {
    await this.page.locator(`${cardName}`).locator('Add to cart').click();
  }

  async removeProduct(cardName: ProductNames) {
    await this.page.locator(`${cardName}`).locator('Remove').click();
  }

  async getProductTitle() {
    await expect(this.productTitle).toBeVisible();
    return await this.productTitle.innerText();
  }

  async takeScreenshotForProductImage(fileName: string) {
    await takeScreenshotOfElement(this.productImage, fileName);
  }

  async clickOnBackToProduct() {
    await this.backToProduct.click();
  }
}
