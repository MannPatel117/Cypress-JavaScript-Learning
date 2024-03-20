Feature: Torrent Form Validation

    Torrent Form Testing 
    @ClientInformation
    Scenario: Client Information Section Testing 
    Given I open Torrent Form Page
    When I add details to Client Information
    Then Validate that all input field are valid

    @PersonalDetails
    Scenario: Personal Detail Section Testing
    When I add details to Personal Details Section
    |Name|Contact|
    |Mann|9879879871|
    Then Validate that all personal details input field are valid

    @ProjectDetails
    Scenario: Project Details Section Testing
    # Given I open Torrent Form Page
    When I add details to Project Details Section
    Then Validate that all Project Details input field are valid

    @Questionnaire
    Scenario: Questionnaire Section Testing
    # Given I open Torrent Form Page
    When I add details to Questionnaire Section
    Then Validate that all Questionnaire Input Fields are Valids