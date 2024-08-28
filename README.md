
Introduction

This is a profile application page built using React.js with custom CSS and SCSS, designed to be fully mobile-friendly. The application dynamically fetches data from GitHub, including usernames and repositories, providing an interactive and responsive user experience.

Why React JS
1 Component based Architecture: React follows a component-based architecture, meaning you can break down the UI into small, reusable pieces of code called components.

2 SEO Friendliness: Faster loading times and improved user experience also contribute to better SEO rankings, as search engines prioritize websites that offer a good user experience.

3 Virtual Dom: React uses a Virtual DOM to efficiently update and render components. When the state of a component changes, React only updates the specific parts of the DOM that need to change, rather than re-rendering the entire page.


API Call With Axios
Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies the process of sending asynchronous HTTP requests to RESTful endpoints and handling responses.
We are calling Two API’S in this project one for getting user profile details and another one for getting repositories. As shown below 
1: Api for getting user profile details
  const fetchData = a sync () => {
      try {
        const profileResponse = await axios.get(
          "https://api.github.com/users/hamidonweb"
        );
        setProfile(profileResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

2: API for getting user Repositories:
const fetchRepose = a sync () => {
      try {
        const reposResponse = await axios.get(
          "https://api.github.com/users/hamidonweb/repos"
        );
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };




Steps How to Run a Project

Step 1: Open the Folder in VS Code
1.	Launch VS Code: Open Visual Studio Code on your computer.
2.	Open the Folder:
o	Click on File in the top menu.
o	Select Open Folder....
o	Browse to the folder where your project is located, then click Select Folder.
Step 2: Install Node Modules
1.	Open the Terminal:
o	In VS Code, click on Terminal in the top menu.
o	Select New Terminal.
2.	Run the Command:
o	In the terminal that appears at the bottom of VS Code, type the following command and press Enter
o	npm install
o	This command installs all the dependencies listed in the package. JSon file into a node modules folder.
Step 3: Start the Project
1.	Run the Start Command:
o	In the same terminal, after the installation is complete, type the following command and press Enter:
npm start
o	This will start your project, and it should automatically open in your default web browser at http://localhost:3000.
