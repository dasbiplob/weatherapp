*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    Chrome
${URL}        http://localhost:8000  
${DELAY}      2s   

*** Test Cases ***
Open Weather Page
    [Teardown]    Close Browser
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys
    Open Browser    ${URL}    ${BROWSER}    chrome_options=${chrome_options}
    [Timeout]    10s
    Location Should Be    ${URL}
    Title Should Be    What's the weather?

*** Keywords ***
Open Website
    Create webdriver....Chrome
    Go To...............${url}
Location Should Be
    [Arguments]    ${url}
    Location Should Be    ${url}
    Title Should Be    What's the weather?
