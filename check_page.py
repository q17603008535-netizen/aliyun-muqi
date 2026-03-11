from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:4321/')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/tmp/jade-website.png', full_page=True)
    print("Screenshot saved to /tmp/jade-website.png")
    browser.close()
