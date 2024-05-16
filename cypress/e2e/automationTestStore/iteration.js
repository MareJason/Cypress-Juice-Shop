/// <reference types="cypress"/>

import iteration from "../../support/PageObject/iteration_PO";

describe('iterate through elements', () => {

    const Iteration = new iteration

    it('iterate through the products', () => {
        Iteration.visitHomePage()
        Iteration.iterationThourghProducts()
    });
    

});