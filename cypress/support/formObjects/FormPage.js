class FormPage{
    getCompanyName(){
        return cy.get('#mat-input-0')
    }
    getCompanyAddress(){
        return cy.get('#mat-input-1')
    }
    getCountrySelect(){
        return cy.get('#mat-select-0')
    }
    getSelectValue(){
        return cy.get('mat-option')
    }
    getStateSelect(){
        return cy.get('#mat-select-2')
    }
    getCitySelect(){
        return cy.get('#mat-select-4')
    }
    getCompanyPincode(){
        return cy.get('#mat-input-2')
    }

    //Personal Information

    getPersonalName(){
        return cy.get('#mat-input-3')
    }
    getPersonalContact(){
        return cy.get('#mat-input-4')
    }
    getPersonalMobile(){
        return cy.get('#mat-input-5')
    }
    getPersonalEmail(){
        return cy.get('#mat-input-6')
    }
    getPersonalTimezone(){
       return cy.get('#mat-select-12')
    }
    getPersonalAddress(){
        return cy.get('#mat-input-7')
    }
    getPersonalCountry(){
        return cy.get('#mat-select-6')
    }
    getPersonalState(){
        return cy.get('#mat-select-8')
    }
    getPersonalCity(){
        return cy.get('#mat-select-10')
    }
    getPersonalPincode(){
        return cy.get('#mat-input-8')
    }

    //Project Details
    getProjectName(){
        return cy.get('#mat-input-9')
    }
    getProjectStatus(){
        return cy.get('#mat-select-14')
    }
    getProjectType(){
        return cy.get('#mat-select-16')
    }
    getProjectDescription(){
        return cy.get('.col-sm-6 > .static-info > .box-input > .form-group > .form-control')
    }
    getProjectAgencies(){
        return cy.get('#mat-input-10')
    }
    getProjectComment(){
        return cy.get('#mat-input-11')
    }
    getProjectLocation(){
        return cy.get('#mat-input-12')
    }
    getProjectStartDate(){
        return cy.get(':nth-child(2) > .static-info > .box-input > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon > path')
    }
    getProjectEndDate(){
        return cy.get(':nth-child(4) > :nth-child(3) > .static-info > .box-input > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator')
    }
    getProjectSample(){
        return cy.get('#mat-input-15')
    }

    //Questionnaire

    getQuestionSubmittion(){
        return cy.get('#mat-input-16')
    }
    getQuestionSample(){
        return cy.get('#mat-input-17')
    }
    getQuestionTAT(){
        return cy.get('#mat-select-18')
    }
    getQuestionShipping(){
        return cy.get('#mat-select-20')
    }
    getQuestionMatrix(){
        return cy.get('#matrix-0')
    }
    getQuestionMatrixSoil(){
        return cy.get('#mat-input-25')
    }
    getQuestionMatrixSoilParam(){
        return cy.get('#mat-input-26')
    }
    getQuestionTestingParam(){
        return cy.get(':nth-child(6) > :nth-child(3) > .static-info > .box-input > .form-group > .form-control')
    }
    getQuestionTests(){
        return cy.get('#mat-select-22')
    }
    getQuestionAnalysis(){
        return cy.get('#test0')
    }
    getQuestionCanister(){
        return cy.get('#mat-select-24')
    }
    getQuestionFlowRegulator(){
        return cy.get('#mat-select-26')
    }
    getQuestionCriticalFactor(){
        return cy.get('#mat-input-18')
    }
    getQuestionPackage(){
        return cy.get('#package0')
    }
    getQuestionSpeical(){
        return cy.get('#mat-input-19')
    }
    getQuestionExcel(){
        return cy.get('#mat-input-20')
    }
    getQuestionEDD(){
        return cy.get('#mat-input-21')
    }
    getQuestionQuoteDate(){
        return cy.get(':nth-child(16) > :nth-child(3) > .static-info > .box-input > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator')
    }
    getQuestionOutcome(){
        return cy.get(':nth-child(17) > :nth-child(3) > .static-info > .box-input > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator')
    }
    getQuestionLetTorrent(){
        return cy.get('#mat-input-24')
    }
}
export default FormPage;