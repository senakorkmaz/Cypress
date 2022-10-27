/// <reference types="cypress"/>

describe('filtering',() =>{
    beforeEach(()=>{
        //cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter "Active" todos',()=>{
        cy.contains('Active').click()
        //This line checks how many todo exist 
        cy.get('.todo-list li').should('have.length',2)
    })
    
    it('should filter "Completed" todos',()=>{
        cy.contains('Completed').click()
        //This line checks how many todo exist 
        cy.get('.todo-list li').should('have.length',1)
        cy.get('label').should('have.css','text-decoration-line','line-through')
        cy.get('.toggle').should('be.checked')
    })
    
    it.only('should filter "All" todos',()=>{
        cy.contains('All').click()
        //This line checks how many todo exist 
        cy.get('.todo-list li').should('have.length',3)
    })

})