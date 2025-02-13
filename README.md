# 📊 Figma Dashboard - Main

A **React-based KPI Tracker Dashboard** built with **Vite, Tailwind CSS, and Recharts** to monitor and visualize key performance indicators dynamically.

---

## 📂 Folder Structure
```
Figma_Dashboard-main/
│── public/             # Public assets
│── src/                # Source code
│   │── assets/         # Images, icons
│   │   │── logo.png
│   │   │── navbar.png
│   │   │── react.svg
│   │── components/     # UI components
│   │   │── Charts.jsx         # Bar & Pie charts using Recharts
│   │   │── Dashboard.jsx      # Main dashboard structure
│   │   │── Filters.jsx        # Filter dropdowns (React Select)
│   │   │── Header.jsx         # Top navigation bar
│   │   │── KPICard.jsx        # KPI summary cards
│   │   │── KPITracker.jsx     # KPI tracker module
│   │   │── RejectionTable.jsx # Rejection reasons table
│   │   │── Sidebar.jsx        # Sidebar navigation
│   │── data/          # Mock data for the dashboard
│   │   │── mockData.js
│   │── styles/        # Global CSS
│   │── App.jsx        # Root component
│   │── index.css      # Tailwind CSS imports
│   │── main.jsx       # Entry point
│── .gitignore         # Git ignored files
│── eslint.config.js   # ESLint configuration
│── index.html         # Root HTML file
│── package.json       # Dependencies and scripts
│── package-lock.json  # Auto-generated dependency lock file
│── README.md          # Project documentation
```

---

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Proviz2/Figma_Dashboard-main.git
cd Figma_Dashboard-main
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```

### 4️⃣ Open in Browser
Visit: **`http://localhost:5173`** (or the port displayed in the terminal).  

---

## 🔧 Technologies Used
- **React** (with Vite for fast performance)
- **Tailwind CSS** (for modern styling)
- **Recharts** (for data visualization)
- **React Select** (for dropdown filters)
- **LocalStorage API** (for state persistence)

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m 'Add new feature'`)
4. **Push to the branch** (`git push origin feature-name`)
5. **Open a Pull Request**

---

## 💬 Questions?
For any inquiries, feel free to **raise an issue** or **reach out**!

Happy Coding! 🎉

