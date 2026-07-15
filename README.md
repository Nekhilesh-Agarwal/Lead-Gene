# 🚀 LeadFlow AI

> AI-powered B2B lead generation platform that automates Google Maps scraping, personalized WhatsApp outreach, and CRM population using n8n, Apify, and Google Sheets.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![n8n](https://img.shields.io/badge/n8n-Automation-EA4B71)
![Apify](https://img.shields.io/badge/Apify-Google%20Maps-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-CRM-green)

---

## 📌 Overview

LeadFlow AI automates the complete B2B lead generation workflow.

Instead of manually searching businesses, collecting contact information, and maintaining spreadsheets, this platform automatically:

- Searches businesses using Google Maps
- Extracts company details
- Generates personalized outreach messages
- Creates WhatsApp chat links
- Stores everything in Google Sheets

---

## ✨ Features

- 🔍 Google Maps Lead Scraping
- 📍 PIN Code Based Search
- 🏢 Business Category Filtering
- 💬 Personalized WhatsApp Message Generation
- 📱 One-click WhatsApp Chat Links
- 📊 Google Sheets CRM Integration
- ⚡ Automated n8n Workflow
- 🌐 Web-based Frontend

---

## 🏗 Architecture

```
Frontend
      │
      ▼
n8n Webhook
      │
      ▼
Apify Google Maps Scraper
      │
      ▼
Generate Outreach Message
      │
      ▼
Generate WhatsApp Link
      │
      ▼
Google Sheets CRM
```

---

## 🖥 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Automation

- n8n
- Apify

### Database

- Google Sheets

### APIs

- Google Maps
- Apify API

---

## 📂 Project Structure

```
LeadFlow-AI
│
├── frontend/
├── workflow/
├── screenshots/
├── docs/
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Setup

1. Clone the repository

```bash
git clone https://github.com/Nekhilesh-Agarwal/LeadFlow-AI.git
```

2. Import the workflow into n8n.

3. Add your Apify API Token.

4. Connect Google Sheets.

5. Update the webhook URL in `script.js`.

6. Run the project.

---

## 📸 Screenshots

### Landing Page

<img width="1821" height="877" alt="image" src="https://github.com/user-attachments/assets/71141f09-2012-4159-ab26-b1f15b79ea0b" />


### n8n Workflow

<img width="1392" height="597" alt="image" src="https://github.com/user-attachments/assets/d0c58e29-63bc-4c4c-aad1-0a642896c4b3" />


### Generated Leads

<img width="1132" height="700" alt="image" src="https://github.com/user-attachments/assets/afca63a2-1ab8-44e6-b639-63051d6f1583" />


---

## 🚀 Future Improvements

- AI Lead Scoring
- Email Discovery
- Duplicate Detection
- CRM Integrations
- Dashboard Analytics
- Multi-city Search
- Export to Excel
- Email Outreach Automation

---

## 🤝 Contributing

Contributions are welcome!

Fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.
