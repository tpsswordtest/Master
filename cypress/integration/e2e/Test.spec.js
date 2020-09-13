import {CaseStudies} from '../../../pageObjects/case-studies/case-studies.page'
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const testurl = "https://sword-grc.com/case-studies"
const cs = new CaseStudies();

describe('Test Case Study', () => {
  before('Ensure test page is there' , () => {
    //Visit Sword case study url
    cy.viewport(1920, 973)
    cy.visit(testurl);
    cs.swordLogo().should('be.visible');
  })
  
 //A unique picture is displayed for each case study
 it('Click each image', () => {
  //
  let listingCount = cy.$(cs.getAllPictures()).length;
  cy.get(cs.getAllPictures().each(($el, index, listingCount) => {
    cy.log(`index: ` + index);
    if (index <= listingCount) {
      cy.wrap($el).scrollIntoView({force: true});
      cy.wrap($el).should('be.visible');
      cy.wrap($el).click();
    }
  })
  )
})
})
