
class  searchSelectionPage{

    homePageText(searchtext){
        cy.get('[class="central-textlogo__image sprite svg-Wikipedia_wordmark"]')
    }
    entertext(searchtext){
        return cy.get('[name="search"]').type(searchtext);
     }
     clickSearch(){
		return cy.get('[type="submit"]').click();  
	}
    getTextHeading() {
        return cy.get('[id="firstHeading"]')
    }
    clickText(){
		return cy.get('[type="submit"]').click();  
	}
    findAndClickSearch(searchtext){
        cy.get('[id="typeahead-suggestions"]').contains(searchtext).click()
    }   
}
module.exports = searchSelectionPage;