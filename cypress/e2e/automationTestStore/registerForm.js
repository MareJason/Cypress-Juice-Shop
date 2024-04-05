import Automation_Store from "../../support/PageObject/automationTestStore_PO";
/// <reference types="cypress"/>

const automationStore = new Automation_Store()

describe('New User Registration', () => {
    it('Register New User', () => {
        automationStore.visitHomePage()
        automationStore.registerNewUser()
    })
});