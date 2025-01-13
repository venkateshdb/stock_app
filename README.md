# 📊 Financial Data Filtering App

A **React-based** financial data filtering application that allows users to **fetch, filter, and sort** financial data for Apple Inc. (`AAPL`). Users can apply filters based on **Date Range, Revenue, and Net Income**, as well as **sort the table** in ascending or descending order.

---

## 🚀 Features
- **📡 Fetch Financial Data**: Retrieves Apple's annual financial reports from the [Financial Modeling Prep API](https://financialmodelingprep.com/).
- **🔍 Advanced Filtering**:
  - **Date Range**: Select a range of years to filter financial data.
  - **Revenue & Net Income**: Set custom min/max values to filter financial records.
- **↕️ Sorting**:
  - Clickable table headers for sorting **Date, Revenue, and Net Income**.
- **🎨 Responsive & Modern UI**:
  - Built with **React & TailwindCSS** for a smooth user experience.
  - Mobile-friendly sidebar filter menu.
- **⚡ Fast & Optimized**:
  - Efficient state management with React hooks.
  - Modular code structure for easy maintainability.

---

## 📸 Screenshots
### 🖼 Sidebar Filters & Data Table  
![App Screenshot](/public/screenshot_1.png)

### 📊 Sorted & Filtered Financial Data  
![Sorted Table](/public/screenshot_2.png)

---

## 🏗️ Tech Stack
- **Frontend**: React, TailwindCSS
- **Deployment**: Vercel

---

## 🛠 Setup & Installation
### **🔧 Prerequisites**
- **Node.js** (`v16+`)
- **NPM**
- **API Key** from [Financial Modeling Prep](https://site.financialmodelingprep.com/developer/docs)

### 🔑 API Configuration
This app fetches financial data from Financial Modeling Prep API.

- Get a free API key from Financial Modeling Prep.
- Create a .env file in the root of your project.
- Add your API key to .env:
 ```sh
  REACT_APP_API_KEY=your_api_key_here
  ```


### **📥 Clone the Repository**
```sh
git clone https://github.com/yourusername/financial-data-filter.git
cd financial-data-filter
```
### 📦 Install Dependencies
```sh
npm install
```
### 🚀 Start Development Server
```sh
npm start
```

  
