import {CaseStudies} from '../../../pageObjects/case-studies/case-studies.page'
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

var testurl = 'https://sword-grc.com/case-studies'
var cs = new CaseStudies();

describe('Test Case Study', () => {
  before('Ensure test page is there' , () => {
    //Visit Sword case study url
    cy.viewport(1920, 973)

    cy.visit(testurl)

    cs.swordLogo().should('be.visible');
  })
  
 //A unique picture is displayed for each case study
 it('Click each image', () => {

  cy.visit(`${testurl}`)

  let listingCount = cy.$(cs.getAllPictures()).length;

  // •	A unique picture is displayed for each case study
  cy.get(cs.getAllPictures().each(($el, index, listingCount) => {

    cy.log(`index: ` + index);

    if (index <= listingCount) {
      cy.wrap($el).scrollIntoView({force: true});

      //•	Hovering over each picture revels the case study name, in the centre of the picture. Need to add in name now visible
      cy.wrap($el).should('be.visible');

      // •	Clicking on the picture takes the user to a new page displaying the associated case study.
      cy.wrap($el).click();

      //•	The case study page has the option of allowing the user to download the full case study.
    }
  })
  )
})
})
