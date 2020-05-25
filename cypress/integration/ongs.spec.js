/// <reference types="cypress" />

import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';
import Profile from '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastroDeOngsComSucesso();
    });
    it('deve poder realizar um login no sistema', () => {
        Logon.acessarLogin();
        Logon.preencherLogin();
    });
    it('devem poder fazer logout', () => {
        cy.login();
        Profile.clicarNoBotaoLogout();
    });
    it('deve poder cadastrar um novo caso', () => {
        cy.login();
        Profile.clicarNoBotaoDeCadastrarNovosCasos();
        NewIncident.preencherCadastroCaso();
        NewIncident.validarCadastroDeCaso();
    });
    it('devem poder excluir um caso', () => {
        cy.createNewIncient();
        cy.login();
        Profile.clicarNoBotaoExcluirUmCaso();
        Profile.validarExclusaoDeCasoComSucesso();
    });
});