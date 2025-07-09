# Lexisg Frontend Intern Test

This is the frontend interface for the Lexisg legal assistant project.

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v16 or higher)
- npm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/DulaDula2003/Lexisg-frontend-intern-test.git
   cd Lexisg-frontend-intern-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

---

## 📄 Citation Linking Logic

When a user submits a legal query, the system simulates a response. If the query matches a predefined case (e.g., the Motor Vehicle Act compensation case), a detailed legal answer is returned along with a citation.

Each citation includes:
- A **PDF source name** (e.g. `Dani_Devi_v_Pritam_Singh.pdf`)
- A **link to the file** (hosted on SharePoint or any cloud storage)

In the UI:
- A 📄 icon and the PDF file name are rendered
- Both open the PDF link in a new tab
- Word wrapping is handled with `word-break: break-all` to ensure no horizontal scroll

---

## 💡 Features
- Light/Dark mode toggle
- Expandable sidebar
- Smooth transitions for theme change, chat card animations, and layout shift
- Expandable profile icon menu

---

## 📁 Tech Stack
- React.js
- TailwindCSS
- Heroicons
- Vite (recommended) or Create React App (CRA)

---

## 🌐 Hosting
Optimized to be deployed as a static site Render.
