const el = require('./elements').ELEMENTS;

class NewIncident {
    preencherCadastroCaso(){
        cy.get(el.title).type('Animal abandonado');
        cy.get(el.description).type("animal necessita de apoia pra moradia");
        cy.get(el.value).type(200);

        cy.route('POST', '**/incidents').as('newIncident');
        cy.get(el.buttonSave).click();
    }

    validarCadastroDeCaso(){
        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    }

}

export default new NewIncident();