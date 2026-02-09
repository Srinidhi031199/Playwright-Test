# 🎭 Playwright Automation Project

This repository contains an end-to-end test automation framework built using **Playwright**. It is designed for reliable, fast, and cross-browser testing of modern web applications.

---

## 🚀 Tech Stack

* **Playwright** (JavaScript / TypeScript)
* **Node.js**
* **npm**
* **VS Code** (recommended IDE)
* **GitHub** (version control)

---

## 📁 Project Structure

```text
PlaywrightProject/
├── tests/                 # Test specs
│   ├── login.spec.js
│   └── sample.spec.js
├── pages/                 # Page Object Model (POM)
│   └── login.page.js
├── utils/                 # Utility/helper functions
├── test-data/             # Test data files (JSON, CSV, etc.)
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies
├── .gitignore             # Ignored files
└── README.md              # Project documentation
```

---

## ⚙️ Prerequisites

Make sure the following are installed on your system:

* Node.js (v16 or above)
* npm (comes with Node.js)
* Git

Check versions:

```bash
node -v
npm -v
```

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd PlaywrightProject
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests for a specific browser:

```bash
npx playwright test --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

---

## 📊 Test Reports

After execution, view the HTML report:

```bash
npx playwright show-report
```

---

## 🧩 Framework Features

* Cross-browser testing (Chromium, Firefox, WebKit)
* Page Object Model (POM)
* Parallel execution
* Built-in HTML reporting
* Screenshot & video capture on failure
* Easy CI/CD integration

---

## 🔧 Configuration

Key configurations can be updated in:

* `playwright.config.js`

  * Browser settings
  * Timeouts
  * Retries
  * Base URL

---

## 🧪 Best Practices Followed

* Reusable page objects
* Clear test naming conventions
* Test data separation
* Minimal hard waits
* Clean and maintainable code

---

## 🤝 Contribution Guidelines

1. Create a feature branch
2. Commit changes with meaningful messages
3. Raise a pull request for review

---

## 📌 Author

**Srinidhi Shankar**
QA Automation Engineer

---

## 📄 License

This project is licensed under the MIT License.

---

Happy Testing! 🚀
