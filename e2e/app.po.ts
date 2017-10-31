import { browser, by, element } from 'protractor';

export class ChuckPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gid-root h1')).getText();
  }
}
