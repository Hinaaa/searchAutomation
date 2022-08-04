
 const data=require('../../testData/data1.json');
 const prodSelection= require("../../pagefactory/searchFeatures");
 const searchSelectionPage = require('../../pageobject/searchSelectionPage');
 const sel = new searchSelectionPage() 
  
 let i=0;
 
 require('cypress-xpath')

describe('Testcase to search and select from list', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
          cy.visit(pageURL) //visit URL
          cy.contains("Wikipedia").should('be.visible') //It should contain text to ensure its in home page
          cy.get('[class="central-textlogo__image sprite svg-Wikipedia_wordmark"]').should('be.visible') //Validate text on home page
        })
      });
    Object.keys(data)
        .forEach(function(tc,i){
            const testData=data[i];
            it(testData.tc,function() {
                execute(testData)
            })
        })
})

function execute(data) {
    prodSelection.searchAndSelectText(data.searchTextData)
    sel.getTextHeading().should('have.text', data.searchTextData)//Searched text should appear
  //  cy.get(searchSelectionPage.getTextHeading()).should('have.text', searchTextData) //Searched text should appear//Searched text should appear
}
  
