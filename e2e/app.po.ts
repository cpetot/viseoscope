import {browser, element, by} from "protractor";

export class ViseoscopePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('viseo-root h1')).getText();
  }
}
