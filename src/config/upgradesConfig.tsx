
 const upgradesConfig = [
  {
    name: "HTML",
    difficulty: "Beginner",
    description: "Build Website Structures",
    cost: 10,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Basic Blog",
        cost: 10,
        description: "Create a simple blog using HTML.",
        areas: ["Content Creation", "Web Publishing"],
      },
      {
        name: "Webpage from the 90s",
        cost: 15,
        description: "Design a webpage with a nostalgic 90s look using HTML.",
        areas: ["Retro Web Design"],
      },
      {
        name: "Responsive Layout",
        cost: 30,
        description: "Make your website adapt to different screen sizes using CSS media queries.",
        areas: ["Responsive Design"],
      },
    ],
  },
  {
    name: "CSS",
    difficulty: "Beginner",
    description: "Style Website Elements",
    cost: 20,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Animated Transitions",
        cost: 10,
        description: "Add engaging animations and transitions to elements using CSS keyframes.",
        areas: ["User Experience", "Web Design"],
      },
      {
        name: "CSS Grid Layout",
        cost: 15,
        description: "Create complex grid-based layouts with ease using CSS grid.",
        areas: ["Layout Design", "Responsive Design"],
      },
      {
        name: "Flexbox",
        cost: 30,
        description: "Efficiently arrange and align elements using CSS flexbox.",
        areas: ["Responsive Design", "User Interface"],
      },
    ],
  },
  {
    name: "JavaScript",
    difficulty: "Beginner",
    description: "Make Websites Interactive",
    cost: 30,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Form Validation",
        cost: 10,
        description: "Validate user inputs in forms using JavaScript.",
        areas: ["Data Validation", "Form Handling"],
      },
      {
        name: "DOM Manipulation",
        cost: 15,
        description: "Dynamically modify and interact with website elements using JavaScript and the Document Object Model (DOM).",
        areas: ["Dynamic Web Content", "User Interaction"],
      },
      {
        name: "AJAX Requests",
        cost: 30,
        description: "Fetch and update data from the server asynchronously using JavaScript.",
        areas: ["Server Communication", "Data Retrieval"],
      },
    ],
  },
  {
    name: "Python",
    difficulty: "Beginner",
    description: "General-purpose Programming",
    cost: 40,
    areas: ["Software Development", "Data Analysis"],
    perks: [
      {
        name: "Data Analysis",
        cost: 10,
        description: "Perform data manipulation, exploration, and analysis using Python libraries like Pandas and NumPy.",
        areas: ["Data Science", "Data Visualization"],
      },
      {
        name: "Web Scraping",
        cost: 15,
        description: "Extract data from websites programmatically using Python libraries like BeautifulSoup.",
        areas: ["Data Extraction", "Web Data Mining"],
      },
      {
        name: "Machine Learning",
        cost: 30,
        description: "Build and train machine learning models using libraries like scikit-learn and TensorFlow.",
        areas: ["Artificial Intelligence", "Predictive Modeling"],
      },
    ],
  },
  {
    name: "Java",
    difficulty: "Beginner",
    description: "Build Scalable Applications",
    cost: 50,
    areas: ["Software Development", "Back-end Development"],
    perks: [
      {
        name: "Object-Oriented Programming",
        cost: 10,
        description: "Learn the principles of object-oriented programming using Java.",
        areas: ["Software Design", "Modularity"],
      },
      {
        name: "Database Integration",
        cost: 15,
        description: "Connect and interact with databases using Java database connectivity (JDBC).",
        areas: ["Data Persistence", "Database Management"],
      },
      {
        name: "Web Services",
        cost: 30,
        description: "Build and consume web services using Java frameworks like Spring and JAX-RS.",
        areas: ["API Development", "Integration"],
      },
      // ... add more objects here
    ],
  },
]; 
export default upgradesConfig;