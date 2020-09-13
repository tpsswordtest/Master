export class CaseStudies {
    getAllPictures() {
      return cy.get('.eihe-box');
    }
    swordLogo() {
      return cy.get('[class="gm-logo__img gm-logo__img-alt"]')
    }
}