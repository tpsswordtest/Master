import {CaseStudies} from '../../../../pageObjects/case-studies/case-studies.page'
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const testurl = "https://sword-grc.com/case-studies/"
const cs = new CaseStudies();

describe('Test Case Study', () => {
  it('Visits the ToolsQA Demo Page and check the menu items', () => {
  //Visit Sword case study url
  cy.visit(testurl);
  
 //A unique picture is displayed for each case study
  cs.getAllPictures().each(($el) => {
      // $el is a wrapped jQuery element
      if ($el) {
        cy.wrap($el).click()
      }
    })
  })
})