/// <reference types="cypress" />


describe('Cypress basics', () => {

    before(() => {
        cy.visit('http://demo.automationtesting.in/Register.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Should visit a page and assert title', () => {
       

    //    const title = cy.title()
    //    console.log(title)

        cy.title().should('be.equal', 'Register')

         }
    )

    it('TextFields', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Cypress')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('have.value','Cypress')
    }

    )
    
    it('Should find and interact  with an element', () => {
        
        cy.get('.nav > :nth-child(3) > a')
            .click()
        
        cy.get('body').should('contain', 'Double Click on Edit')

    }

    )


}

)