# 🗒️ SlidesToNotes

**SlidesToNotes** allows users to easily upload PowerPoint presentations, generate concise notes, and download metadata. Built using **React**, the application is designed with simplicity and efficiency in mind to enhance your learning experience.  

## 🚀 Features  

- **Effortless Note Generation**  
  Upload `.pptx` files to quickly extract and generate notes without any AI dependencies.  

- **Download Options**  
  - Download notes in a user-friendly format.  
  - Download metadata, including notes and images, in a well-organized ZIP file.  

- **Interactive Learning**  
  Tools and features designed to improve your study experience, making learning more efficient and engaging.  

- **User-Friendly Interface**  
  Clean, responsive design ensures a seamless experience across devices.  

## 🔗 Related Resources  

- **Backend Repository**: [SlidesToNotes Backend](https://github.com/nsider4/SlidesToNotesBackend)  
- **Live Application**: [SlidesToNotes Website](https://slides-to-notes.vercel.app/) (The counter might take ~1m to show up due to the nature of host)

## 🛠️ Built With  

- **React**: For building a dynamic and responsive user interface.
- **CSS**: For styling the application.

## 🚀 How to Run  

1. **Clone the Repository**  
   Clone the repository to your local machine using the following commands:  
   ```bash
   git clone https://github.com/nsider4/SlidesToNotes.git
   cd SlidesToNotes
   
2. **Install Dependencies**  
   Ensure you have Node.js installed. Then, install the required dependencies:  
   ```bash
   npm install

3. **Start the Development Server**  
   Run the following command to start the React development server:
   ```bash
   npm start

The server will automatically open the application in your default web browser. If it doesn't, you can manually visit http://localhost:3000


## 📂 File Structure  

The project is organized as follows:  

```plaintext
slidestonotes/
├── public/                # Publicly accessible files (e.g., index.html, favicon)
├── src/                   # Main source code directory
│   ├── components/        # Reusable React components
│   │   ├── UploadSection/ # Components for uploading files and managing notes
│   │   └── ...            # Other UI components
│   ├── pages/             # Page-level components
│   │   ├── Home/          # Home page with upload and feature sections
│   │   └── ...            # Other page-level components
│   ├── styles/            # Global styles
│   │   ├── Footer.css     # The styles for the footer
│   │   └── Header.css     # The styles for the header
│   ├── utils/             # Util components
│   │   └── useFileUpload/ # Utils component with various useful functions
│   ├── App.css            # Main application global styles
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   └── styles/            # Global and modular CSS files
├── .gitignore             # Files and directories to ignore in Git
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 How It Works  

1. **Upload Process**:  
   Users can easily drag-and-drop `.pptx` files or browse their local system to upload presentations.  

2. **Processing Notes**:  
   The backend extracts detailed and structured notes from the uploaded file, ensuring clarity and usability for study purposes.  

3. **Download Options**:  
   - **Notes**: Download extracted notes in text format or copy them directly to the clipboard.  
   - **Metadata**: Download a ZIP file containing all notes and related images extracted from the PowerPoint slides.  

4. **Interactive Features**:  
   The platform includes intuitive tools to help users organize, refine, and customize their study notes efficiently.  

## 🤝 Support  

If you experience issues, have suggestions, or need assistance, here are your options:  
- Open an issue on the [GitHub repository](https://github.com/nsider4/SlidesToNotes).