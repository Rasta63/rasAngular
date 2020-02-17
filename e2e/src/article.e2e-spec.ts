import {browser, element, logging, by} from 'protractor';
import {articlePage} from './article.po';

describe('Teste des Article',()=>{
    let page : articlePage;
    let nbArticle : number;

    beforeEach(()=>{
        page = new articlePage();
        browser.get('/admin');
    });

    it('Recherche le lien d\'ajout de planète et clique dessus',()=>{
        element.all(by.css('.articleLigne')).then(totalRows =>{
            this.nbArticle = totalRows.length;
            element(by.css('#addArticle')).click();
            page.sleep();
            expect(browser.driver.getCurrentUrl()).toContain('admin/article/add');
        });
    });

    it('Test le formulaire', ()=>{
        browser.get('admin/article/add');
        page.completeForm();
        page.sleep();
        let submitBtn = element.all(by.css('#submitBtn'));
        submitBtn.click().then(fn =>{
            element.all(by.css('.articleLigne')).then(totalNewARows => {
                this.nbArticle +=1;
                const compareArticle = this.nbArticle;
                expect(totalNewARows.length).toEqual(compareArticle);
                page.sleep();
            });
        });
    });

    it('Test de la suppression', () => {
        browser.get('/admin');
        page.sleep();
        let lastDeleteButton = element.all(by.css('.deleteArticle')).last();
        lastDeleteButton.click().then(fn => {
          element.all(by.css('.articleLigne')).then(totalNewRows => {
            this.nbArticle -= 1;
            const compare = this.nbArticle ;
            expect(totalNewRows.length).toEqual(compare);
          });
        });
      });
    
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });

});
