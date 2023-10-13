*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    firefox
${URL}        http://localhost:8000

*** Test Cases ***
Open Weather Page
    Open Browser    ${URL}    ${BROWSER}
    Title Should Be    What's the weather?
    Close Browser
