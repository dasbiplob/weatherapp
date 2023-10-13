*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    Chrome
${URL}        http://localhost:8000  
${DELAY}      2s   

*** Test Cases ***
Open Weather Page
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Call Method    ${chrome_options}    add_argument    headless
    Open Browser    ${URL}    ${BROWSER}    chrome_options=${chrome_options}
    [Timeout]    10s
    Location Should Be    ${URL}
    Title Should Be    What's the weather?
    # Add more test steps as needed
    Close Browser
    
*** Keywords ***
Location Should Be
    [Arguments]    ${url}
    Location Should Be    ${url}
    Title Should Be    What's the weather?
