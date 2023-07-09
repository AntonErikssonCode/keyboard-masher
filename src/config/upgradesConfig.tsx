const upgradesConfig = [
  {
    name: "HTML",
    difficulty: "Beginner",
    description: "Build Website Structures",
    cost: 50,
    mashPerSec: 1,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Basic Blog",
        parent:"HTML",
        cost: 100,
        description: "Create a simple blog using HTML.",
        areas: ["Content Creation", "Web Publishing"],
        bonus:[{type: "mash", bonusText: "+2 per Mash", mash:2}]
        
      },
      {
        name: "Webpage from the 90s",
        parent:"HTML",
        cost: 300,
        description: "Design a webpage with a nostalgic 90s look using HTML.",
        areas: ["Retro Web Design"],
        bonus:[{type: "mutiply", bonusText: "Doubles HTML Effectivity", mutiplier:2}]
      },
      {
        name: "Responsive Layout",
        parent:"HTML",
        cost: 500,
        description:
          "Make your website adapt to different screen sizes using CSS media queries.",
        areas: ["Responsive Design"],
        bonus:[{type: "secret", bonusText: "NERD OUT!"}]
      },
    ],
  },
  {
    name: "CSS",
    difficulty: "Beginner",
    description: "Style Website Elements",
    cost: 250,
    mashPerSec: 5,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Animated Transitions",
        parent:"CSS",
        cost: 2000,
        description:
          "Add engaging animations and transitions to elements using CSS keyframes.",
        areas: ["User Experience", "Web Design"],
        bonus:[{type: "mash", bonusText: "+5 per Mash", mash:5}]
      },
      {
        name: "CSS Grid Layout",
        parent:"CSS",
        cost: 5000,
        description:
          "Create complex grid-based layouts with ease using CSS grid.",
        areas: ["Layout Design", "Responsive Design"],
        bonus:[{type: "mutiply", bonusText: "Doubles CSS Effectivity", mutiplier:2}]
      },
      {
        name: "Flexbox",
        parent:"CSS",
        cost: 10000,
        description:
          "Efficiently arrange and align elements using CSS flexbox.",
        areas: ["Responsive Design", "User Interface"],
        bonus:[{type: "secret", bonusText: "NERD OUT!"}]
      },
    ],
  },
  {
    name: "JavaScript",
    difficulty: "Beginner",
    description: "Make Websites Interactive",
    cost: 1000,
    mashPerSec: 100,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Form Validation",
        parent:"JavaScript",
        cost: 20000,
        description: "Validate user inputs in forms using JavaScript.",
        areas: ["Data Validation", "Form Handling"],
        bonus:[{type: "mash", bonusText: "+5 per Mash", mash:5}]
      },
      {
        name: "DOM Manipulation",
        parent:"JavaScript",
        cost: 40000,
        description:
          "Dynamically modify and interact with website elements using JavaScript and the Document Object Model (DOM).",
        areas: ["Dynamic Web Content", "User Interaction"],
        bonus:[{type: "mutiply", bonusText: "Doubles JavaScript Effectivity", mutiplier:2}]
      },
      {
        name: "AJAX Requests",
        parent:"JavaScript",
        cost: 100000,
        description:
          "Fetch and update data from the server asynchronously using JavaScript.",
        areas: ["Server Communication", "Data Retrieval"],
        bonus:[{type: "secret", bonusText: "NERD OUT!"}]
      },
    ],
  },
  {
    name: "Python",
    difficulty: "Beginner",
    description: "General-purpose Programming",
    cost: 15000,
    mashPerSec: 1500,
    areas: ["Software Development", "Data Analysis"],
    perks: [
      {
        name: "Data Analysis",
        parent:"Python",
        cost: 150000,
        description:
          "Perform data manipulation, exploration, and analysis using Python libraries like Pandas and NumPy.",
        areas: ["Data Science", "Data Visualization"],
        bonus:[{type: "mash", bonusText: "+5 per Mash", mash:5}]
      },
      {
        name: "Web Scraping",
        parent:"Python",
        cost: 450000,
        description:
          "Extract data from websites programmatically using Python libraries like BeautifulSoup.",
        areas: ["Data Extraction", "Web Data Mining"],
        bonus:[{type: "mutiply", bonusText: "Doubles Python Effectivity", mutiplier:2}]
      },
      {
        name: "Machine Learning",
        parent:"Python",
        cost: 600000,
        description:
          "Build and train machine learning models using libraries like scikit-learn and TensorFlow.",
        areas: ["Artificial Intelligence", "Predictive Modeling"],
        bonus:[{type: "secret", bonusText: "NERD OUT!"}]
      },
    ],
  },
  {
    name: "Java",
    difficulty: "Beginner",
    description: "Build Scalable Applications",
    cost: 100000,
    mashPerSec: 5500,
    areas: ["Software Development", "Back-end Development"],
    perks: [
      {
        name: "Object-Oriented Programming",
        parent:"Java",
        cost: 2000000,
        description:
          "Learn the principles of object-oriented programming using Java.",
        areas: ["Software Design", "Modularity"],
        bonus:[{type: "mash", bonusText: "+5 per Mash", mash:5}]
      },
      {
        name: "Database Integration",
        parent:"Java",
        cost: 3000000000,
        description:
          "Connect and interact with databases using Java database connectivity (JDBC).",
        areas: ["Data Persistence", "Database Management"],
        bonus:[{type: "mutiply", bonusText: "Doubles Java Effectivity", mutiplier:2}]
      },
      {
        name: "Web Services",
        parent:"Java",
        cost: 5000000000,
        description:
          "Build and consume web services using Java frameworks like Spring and JAX-RS.",
        areas: ["API Development", "Integration"],
        bonus:[{type: "secret", bonusText: "NERD OUT!"}]
      },
    ],
  },
  {
    name: "Ruby",
    difficulty: "Beginner",
    description: "Elegant and readable programming language",
    cost: 10000000,
    mashPerSec: 15000,
    areas: ["Web Development", "Scripting"],
    perks: [
      {
        name: "Rails Framework",
        parent: "Ruby",
        cost: 10000000000000,
        description: "Develop web applications using the Ruby on Rails framework.",
        areas: ["Web Development", "Rapid Prototyping"],
        bonus: [
          { type: "mash", bonusText: "+3 per Mash", mash: 3 }
        ]
      },
      {
        name: "Metaprogramming",
        parent: "Ruby",
        cost: 20000000000000,
        description: "Create programs that can modify or extend their own behavior.",
        areas: ["Code Generation", "Dynamic Programming"],
        bonus: [
          { type: "multiply", bonusText: "Doubles Ruby Effectiveness", multiplier: 2 }
        ]
      },
      {
        name: "RubyGems",
        parent: "Ruby",
        cost: 20000000000000,
        description: "Utilize community-contributed libraries and tools using RubyGems.",
        areas: ["Code Reusability", "Package Management"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!" }
        ]
      },
    ],
  },
  {
    name: "C++",
    difficulty: "Intermediate",
    description: "High-performance systems programming language",
    cost: 150000000,
    mashPerSec: 10000,
    areas: ["System Programming", "Game Development"],
    perks: [
      {
        name: "Memory Management",
        parent: "C++",
        cost: 10000000000000,
        description: "Learn manual memory allocation and deallocation techniques.",
        areas: ["Resource Optimization", "Low-level Programming"],
        bonus: [
          { type: "mash", bonusText: "+4 per Mash", mash: 4 }
        ]
      },
      {
        name: "Template Metaprogramming",
        parent: "C++",
        cost: 20000000000000,
        description: "Harness the power of compile-time code generation using templates.",
        areas: ["Generic Programming", "Compile-time Optimization"],
        bonus: [
          { type: "multiply", bonusText: "Doubles C++ Effectiveness", multiplier: 2 }
        ]
      },
      {
        name: "OpenGL",
        parent: "C++",
        cost: 70000000000000,
        description: "Create graphics-intensive applications using the OpenGL library.",
        areas: ["Computer Graphics", "Interactive Applications"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!" }
        ]
      },
    ],
  },
  {
    name: "Swift",
    difficulty: "Intermediate",
    description: "Modern and safe programming language for iOS and macOS",
    cost: 100000000,
    mashPerSec: 1000000,
    areas: ["Mobile App Development", "iOS Development"],
    perks: [
      {
        name: "UIKit Framework",
        parent: "Swift",
        cost: 50000000000000,
        description: "Build user interfaces for iOS applications using UIKit.",
        areas: ["iOS Development", "User Interface Design"],
        bonus: [
          { type: "mash", bonusText: "+5 per Mash", mash: 5 }
        ]
      },
      {
        name: "Core Data",
        parent: "Swift",
        cost: 650000000000000,
        description: "Persist and manage application data using Core Data.",
        areas: ["Data Persistence", "Database Management"],
        bonus: [
          { type: "multiply", bonusText: "Doubles Swift Effectiveness", multiplier: 2 }
        ]
      },
      {
        name: "Combine Framework",
        parent: "Swift",
        cost: 1000000000000000,
        description: "Build reactive and asynchronous apps using the Combine framework.",
        areas: ["Reactive Programming", "Asynchronous Operations"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!" }
        ]
      },
    ],
  },
  {
    name: "Go",
    difficulty: "Intermediate",
    description: "Efficient and concurrent programming language",
    cost: 20000000000,
    mashPerSec: 10000000,
    areas: ["Backend Development", "Network Applications"],
    perks: [
      {
        name: "Goroutines",
        parent: "Go",
        cost: 10000000000000006,
        description: "Use lightweight threads (goroutines) for concurrent programming.",
        areas: ["Concurrency", "Parallelism"],
        bonus: [
          { type: "mash", bonusText: "+6 per Mash", mash: 6 }
        ]
      },
      {
        name: "Standard Library",
        parent: "Go",
        cost: 20000000000000006,
        description: "Leverage the powerful built-in functionalities of the Go standard library.",
        areas: ["Code Reusability", "Efficiency"],
        bonus: [
          { type: "multiply", bonusText: "Doubles Go Effectiveness", multiplier: 2 }
        ]
      },
      {
        name: "Web Development",
        parent: "Go",
        cost: 30000000000000006,
        description: "Build scalable web applications using Go's web development frameworks.",
        areas: ["Web Development", "API Development"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!" }
        ]
      },
    ],
  },
  {
    name: "Rust",
    difficulty: "Advanced",
    description: "Safe and concurrent systems programming language",
    cost: 100000000000,
    mashPerSec: 156165,
    areas: ["System Programming", "Embedded Systems"],
    perks: [
      {
        name: "Ownership System",
        parent: "Rust",
        cost: 100000000000000006,
        description: "Utilize Rust's ownership system for memory safety and thread safety.",
        areas: ["Memory Management", "Concurrency"],
        bonus: [
          { type: "mash", bonusText: "+7 per Mash", mash: 7 }
        ]
      },
      {
        name: "Asynchronous Programming",
        parent: "Rust",
        cost: 300000000000000006,
        description: "Write efficient asynchronous code using Rust's async/await syntax.",
        areas: ["Asynchronous Operations", "Concurrency"],
        bonus: [
          { type: "multiply", bonusText: "Doubles Rust Effectiveness", multiplier: 2 }
        ]
      },
      {
        name: "Embedded Systems",
        parent: "Rust",
        cost: 9999999999999999999,
        description: "Develop low-level code for embedded systems using Rust.",
        areas: ["IoT Development", "Embedded Programming"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!" }
        ]
      },
    ],
  },
];
export default upgradesConfig;
