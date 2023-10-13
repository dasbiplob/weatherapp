*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    firefox
${URL}        http://localhost:8000

*** Test Cases ***
Open Weather Page
    Open Browser    ${URL}    ${BROWSER}
    Location Should Be    ${URL}
    Title Should Be    What's the weather?
    Close Browser

*** Keywords ***
Open Website
    Open Browser    ${URL}    ${BROWSER}
Location Should Be
    [Arguments]    ${url}
    Location Should Be    ${url}
    Title Should Be    What's the weather?
