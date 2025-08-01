# Automation-test-by-Playwright
This is a test automation for technical test of wedev.
This repository contains automated test scripts built with [Playwright](https://playwright.dev/) for the **Farazi Staging Website**.

The tests cover:
- ✅ User Registration
- ✅ User Login
- ✅ Update Customer Profile (Mobile number)
- ✅ Manage Customer Addresses (Add new address)

---

## 🚀 Project Setup

### 1. Clone the Repository
```bash
git clone (https://github.com/gowrob/Automation-test-by-Playwright/)
2. Install Dependencies
Make sure you have Node.js (>=16) installed, then run:
copy and paste the tests.js file to the test folder and then run

bash
npm install

Running Tests
npx playwright test

If you are on Windows PowerShell, you may face execution policy errors when using npx.
Suggestion: Use the Command Prompt (cmd) terminal instead of PowerShell to avoid these issues.

✅ Solved Problems / Test Coverage
Login & Registration with valid credentials.

Profile Update – Automated updating user mobile number.

Customer Addresses – Automated adding a new address.

Selector Issues – Used XPath and name selectors.

PowerShell Problems – Recommended cmd terminal to run tests smoothly.

