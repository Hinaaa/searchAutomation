//const searchSelectionPage=require("../../pageobject/searchSelectionPage");

const { functionsIn } = require("lodash");
const searchSelectionPage = require("../pageobject/searchSelectionPage");

//import searchSelectionPage from '../../pageobject/searchSelectionPage';

const sel = new searchSelectionPage()

//Search text and click
async function searchText(searchTextData){
    sel.entertext(searchTextData) //type text
    sel.clickSearch().wait(500) //click search button
}
//Search text, select and click
async function searchAndSelectText(searchTextData){
    sel.entertext(searchTextData) //type text
    sel.findAndClickSearch(searchTextData)
}
//Search text, select and click
async function searchPartialTextAndClick(partialSearchText,searchTextData){
    sel.entertext(partialSearchText) //type text
    sel.findAndClickSearch(searchTextData) //Search and click desired text
}

//Seach without data
async function searchWithoutText(){
sel.clickSearch() //click search button
}
module.exports={searchText,searchAndSelectText,searchPartialTextAndClick,searchWithoutText};
