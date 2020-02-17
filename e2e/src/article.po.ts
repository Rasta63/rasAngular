import { browser, by, element } from 'protractor';

export class articlePage {

    sleep() {
      browser.driver.sleep(3000);
    }
    completeForm() {
        let titre = element.all(by.id('titre'));
        let image = element.all(by.id('image'));
        let contenu = element.all(by.id('contenu'));
        let categorie = element.all(by.id('categorie'));
        titre.sendKeys('test');
        contenu.sendKeys('Oui');
        image.sendKeys('assets/img.png');
        categorie.sendKeys('economie');
      }
}