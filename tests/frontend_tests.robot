*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    firefox
${URL}        http://localhost:8000

*** Test Cases ***
Open Weather Page
    Open Browser    ${URL}    ${BROWSER}  executable_path=/usr/local/bin/geckodriver
    Title Should Be    What's the weather?
    Close Browser
