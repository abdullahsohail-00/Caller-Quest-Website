# CallerQuest - Dynamic People Search Website

This repository contains the source code for CallerQuest, a dynamic website offering free people search, reverse phone lookup, and address lookup services.  The website is built with HTML, CSS, Bootstrap, and JavaScript, and likely interacts with a backend service (not included in this repository) for data retrieval and search functionality.

**Features:**

* **Dynamic Search Functionality:**  Provides three search options (Name, Phone, Address) with a tabbed interface using Bootstrap tabs.  The search forms are designed to send requests to a backend for data retrieval, though the backend implementation is not included here.
* **Informative Content:**  Includes sections about the company, its services, and the benefits of using CallerQuest.
* **Interactive Feature Boxes:**  Clickable feature boxes highlight the key services (Address Lookup, Reverse Phone Search, People Search) and likely redirect users to the appropriate search tabs.
* **Responsive Design:**  Adapts to different screen sizes for optimal viewing on various devices, thanks to Bootstrap's responsive grid system.
* **Modern UI:**  Utilizes Bootstrap for a clean and modern user interface.  Bootstrap Icons are used for visual representation of features.  
* **Footer Links:** Provides links to legal pages (Terms of Use, Privacy Policy), contact information, and other helpful resources.  Includes a clear disclaimer about FCRA compliance.
* **Animated Call to Action:** Features an animated "Search now for free!" button to encourage user engagement.



**Technologies Used:**

* **HTML:** Structures the website content.
* **CSS:**  Styles the visual elements.  Custom CSS (`styles.css`) is used for specific styling, and Bootstrap provides the base styling and responsive layout.
* **Bootstrap 5:** CSS framework for responsive design and UI components.
* **JavaScript:**  Adds interactivity, including tab switching and likely handling search form submissions (though the backend interaction is not included in this repository).  The included `script.js` file is likely where this logic would reside.
* **Bootstrap Icons:**  Provides visually appealing icons for features and calls to action.


**Folder Structure (Assumed):**

* **index.html:** The main HTML file.
* **styles.css:** The custom CSS file.
* **script.js:**  The custom JavaScript file.
* **Images:** Folder containing website images, including the logo.
* **removals.html, terms-of-use.html, privacy-policy.html:** Legal and help pages (referenced in the footer).


**Key Functionality (requiring backend implementation):**

The core functionality of this website—performing the actual people search, reverse phone lookup, and address lookup—relies on a backend system that is not included in this repository. The provided code sets up the front-end interface for submitting search queries, but the data processing and retrieval would happen on the server-side.


**How to Run Locally (with limitations):**

1. Clone the repository: `https://github.com/abdullahsohail-00/Caller-Quest-Website.git`
2. Open `index.html` in a web browser.

**Note:**  Because the backend implementation is missing, the search functionality will not work as intended.  You'll see the front-end interface and can interact with the tabs and forms, but submitting a search will not yield any results without a connected backend.

**Further Development:**

* **Backend Implementation:**  Develop a backend service to handle search queries, interact with data sources, and return search results.  This could be built using various technologies (e.g., Node.js, Python, PHP).
* **Search Results Display:**  Implement the front-end logic to display search results dynamically based on the data returned from the backend.
* **Enhanced UI/UX:** Consider adding features like loading indicators during search, error handling, and potentially more advanced search filtering options.
* **SEO Optimization:**  Optimize the website for search engines to improve visibility and attract more users.
