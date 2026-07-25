/// <reference types='cypress'/>

describe("tarefas", () => {
  it("deve cadastrar uma nova tarefa", () => {
    cy.request({
      url: "http://localhost:3333/helper/tasks",
      method: "DELETE",
      body: { name: "Ler um livro de JavaScript" },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });

    cy.visit("http://localhost:3000");

    cy.get('input[placeholder="Add a new Task"]').type(
      "Ler um livro de JavaScript",
    );

    // cy.get('//button[contains(text(), "Create")]').click()
    cy.contains("button", "Create").click()

    // cy.get('main div p')
    //   .should('be.visible')
    //   .should('have.text', 'Ler um livro de JavaScript')

    cy.contains('main div p', 'Ler um livro de JavaScript')
      .should('be.visible')
  });
});
