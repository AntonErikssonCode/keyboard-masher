/* const upgradesConfig = [
  {
    name: "HTML",
    difficulty: "Beginner",
    description: "Build Website Structures",
    cost: 50,
    mashPerSec: 1,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Cat Blog",
        parent: "HTML",
        cost: 100,
        description:
          "Share your love for cats and make grandma's heart melt with HTML magic. It's purrfect!",
        areas: ["Content Creation", "Web Publishing"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "90s Style Webpage",
        parent: "HTML",
        cost: 300,
        description:
          "Take a wild trip back to the 90s and unleash the most eye-searing web design known to humanity. AAAAAHHHH!",
        areas: ["Retro Web Design"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Responsive Layout",
        parent: "HTML",
        cost: 500,
        description:
          "Make your web masterpieces shine even on your vintage, duct-taped Sony Ericsson W810i. Now that's dedication!",
        areas: ["Responsive Design"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "Pixar-Level Animations",
        parent: "CSS",
        cost: 2000,
        description:
          "Bring your divs to life with animations that would make Pixar jealous. You're the director of web magic!",
        areas: ["User Experience", "Web Design"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "FlexBoss",
        parent: "CSS",
        cost: 5000,
        description:
          "Unlock the secret art of div centering and become the ultimate FlexBoss. No more awkwardly aligned elements!",
        areas: ["Layout Design", "Responsive Design"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Color Gradient Maestro",
        parent: "CSS",
        cost: 10000,
        description:
          "Master the fine art of creating a color gradient that starts with brown and ends with an even darker brown. It's the subtle elegance!",
        areas: ["Responsive Design", "User Interface"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "Basic Logic",
        parent: "JavaScript",
        cost: 20000,
        description:
          "Thanks to the Greek philosophers, your keyboard now suffers from mistreatment. That's just great!",
        areas: ["Data Validation", "Form Handling"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "DOM Sorcery",
        parent: "JavaScript",
        cost: 40000,
        description:
          "Unleash your power to manipulate the Document Object Model (DOM) and make elements dance to your tune.",
        areas: ["Dynamic Web Content", "User Interaction"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Wild on the Pokémon API",
        parent: "JavaScript",
        cost: 100000,
        description:
          "Embark on an adventure through the mystical realms of the Pokémon API. Gotta catch 'em all, programmatically!",
        areas: ["Server Communication", "Data Retrieval"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "Attempt to Load MNIST",
        parent: "Python",
        cost: 150000,
        description:
          "Embark on a daring mission to load the MNIST dataset. Will you conquer the data or be overwhelmed?",
        areas: ["Data Science", "Data Visualization"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Web Scraping Shenanigans",
        parent: "Python",
        cost: 450000,
        description:
          "Master the art of web scraping and extract hidden treasures of data from the vast realms of the internet.",
        areas: ["Data Extraction", "Web Data Mining"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Skynet Activation",
        parent: "Python",
        cost: 600000,
        description:
          "Dive into the realm of artificial intelligence and predictive modeling. Will you create the next Skynet or save humanity?",
        areas: ["Artificial Intelligence", "Predictive Modeling"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Java",
    difficulty: "Beginner",
    description: "Building castles in code!",
    cost: 100000,
    mashPerSec: 5500,
    areas: ["Software Development", "Back-end Development"],
    perks: [
      {
        name: "Verbose much?",
        parent: "Java",
        cost: 2000000,
        description:
          "Embrace the verbosity! Write novels of code with meticulous details, leaving no stone unturned in the quest for precision.",
        areas: ["Software Design", "Modularity"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Database Dominator",
        parent: "Java",
        cost: 3000000000,
        description:
          "Rule the databases like a mighty monarch, wielding the power of Java to conquer the realm of data persistence and management.",
        areas: ["Data Persistence", "Database Management"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Checked Exception Enigma",
        parent: "Java",
        cost: 5000000000,
        description:
          "Unlock the mysteries of checked exceptions, a puzzle wrapped in a conundrum. Navigate the intricate paths of error handling with finesse!",
        areas: ["API Development", "Integration"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Ruby",
    difficulty: "Beginner",
    description: "The elegant art of code poetry.",
    cost: 10000000,
    mashPerSec: 15000,
    areas: ["Web Development", "Scripting"],
    perks: [
      {
        name: "GEMS!!!",
        parent: "Ruby",
        cost: 10000000000000,
        description:
          "Dive into the treasure trove of Ruby gems! Unleash the power of community-contributed code and bring magic to your projects.",
        areas: ["Web Development", "Rapid Prototyping"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Metamagic",
        parent: "Ruby",
        cost: 20000000000000,
        description:
          "Step into the realm of metaprogramming, where you bend the laws of coding reality. Shape and mold your code with spellbinding flexibility.",
        areas: ["Code Generation", "Dynamic Programming"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Chooo Chooo!",
        parent: "Ruby",
        cost: 20000000000000,
        description:
          "All aboard the Ruby on Rails express! Journey through the vast landscape of web development with speed, efficiency, and a touch of elegance.",
        areas: ["Code Reusability", "Package Management"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "*Pointer here, *pointer there",
        parent: "C++",
        cost: 10000000000000,
        description: "",
        areas: ["Resource Optimization", "Low-level Programming"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Simulate Smoke",
        parent: "C++",
        cost: 20000000000000,
        description: "WebGL",
        areas: ["Generic Programming", "Compile-time Optimization"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "TrashTalk C",
        parent: "C++",
        cost: 70000000000000,
        description: "",
        areas: ["Computer Graphics", "Interactive Applications"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "Get a job at Apple",
        parent: "Swift",
        cost: 50000000000000,
        description: "",
        areas: ["iOS Development", "User Interface Design"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Become A hipster",
        parent: "Swift",
        cost: 650000000000000,
        description: "",
        areas: ["Data Persistence", "Database Management"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Combine Magic",
        parent: "Swift",
        cost: 1000000000000000,
        description: "",
        areas: ["Reactive Programming", "Asynchronous Operations"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "Brag about your Google internship",
        parent: "Go",
        cost: 10000000000000006,
        description: "",
        areas: ["Concurrency", "Parallelism"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Goroutine Ninjas",
        parent: "Go",
        cost: 20000000000000006,
        description: "",
        areas: ["Code Reusability", "Efficiency"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Code Simplicity! ",
        parent: "Go",
        cost: 30000000000000006,
        description: "",
        areas: ["Web Development", "API Development"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
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
        name: "Safe but firm",
        parent: "Rust",
        cost: 100000000000000006,
        description: "",
        areas: ["Memory Management", "Concurrency"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Be",
        parent: "Crabsticks",
        cost: 300000000000000006,
        description: "",
        areas: ["Asynchronous Operations", "Concurrency"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Rust Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Embedded Systems",
        parent: "Rust",
        cost: 9999999999999999999,
        description: "",
        areas: ["IoT Development", "Embedded Programming"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
];
export default upgradesConfig;
 */
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
        name: "Cat Blog",
        parent: "HTML",
        cost: 200,
        description:
          "Share your love for cats and make grandma's heart melt with HTML magic. It's purrfect!",
        areas: ["Content Creation", "Web Publishing"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "90s Style Webpage",
        parent: "HTML",
        cost: 500,
        description:
          "Take a wild trip back to the 90s and unleash the most eye-searing web design known to humanity. AAAAAHHHH!",
        areas: ["Retro Web Design"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles HTML Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Responsive Layout",
        parent: "HTML",
        cost: 1000,
        description:
          "Make your web masterpieces shine even on your vintage, duct-taped Sony Ericsson W810i. Now that's dedication!",
        areas: ["Responsive Design"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "CSS",
    difficulty: "Beginner",
    description: "Style Website Elements",
    cost: 1000,
    mashPerSec: 20,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Pixar-Level Animations",
        parent: "CSS",
        cost: 2000,
        description:
          "Bring your divs to life with animations that would make Pixar jealous. You're the director of web magic!",
        areas: ["User Experience", "Web Design"],
        bonus: [
          { type: "mash", bonusText: "+20 per Mash", mash: 20, multiplier: 0 },
        ],
      },
      {
        name: "FlexBoss",
        parent: "CSS",
        cost: 5000,
        description:
          "Unlock the secret art of div centering and become the ultimate FlexBoss. No more awkwardly aligned elements!",
        areas: ["Layout Design", "Responsive Design"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles CSS Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Color Gradient Maestro",
        parent: "CSS",
        cost: 10000,
        description:
          "Master the fine art of creating a color gradient that starts with brown and ends with an even darker brown. It's the subtle elegance!",
        areas: ["Responsive Design", "User Interface"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "JavaScript",
    difficulty: "Beginner",
    description: "Make Websites Interactive",
    cost: 10000,
    mashPerSec: 200,
    areas: ["Web Development", "Front-end Development"],
    perks: [
      {
        name: "Basic Logic",
        parent: "JavaScript",
        cost: 20000,
        description:
          "Thanks to the Greek philosophers, your keyboard now suffers from mistreatment. That's just great!",
        areas: ["Data Validation", "Form Handling"],
        bonus: [
          { type: "mash", bonusText: "+200 per Mash", mash: 200, multiplier: 0 },
        ],
      },
      {
        name: "DOM Sorcery",
        parent: "JavaScript",
        cost: 50000,
        description:
          "Unleash your power to manipulate the Document Object Model (DOM) and make elements dance to your tune.",
        areas: ["Dynamic Web Content", "User Interaction"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles JavaScript Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Wild on the Pokémon API",
        parent: "JavaScript",
        cost: 100000,
        description:
          "Embark on an adventure through the mystical realms of the Pokémon API. Gotta catch 'em all, programmatically!",
        areas: ["Server Communication", "Data Retrieval"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Python",
    difficulty: "Beginner",
    description: "General-purpose Programming",
    cost: 100000,
    mashPerSec: 2000,
    areas: ["Software Development", "Data Analysis"],
    perks: [
      {
        name: "Attempt to Load MNIST",
        parent: "Python",
        cost: 200000,
        description:
          "Embark on a daring mission to load the MNIST dataset. Will you conquer the data or be overwhelmed?",
        areas: ["Data Science", "Data Visualization"],
        bonus: [
          { type: "mash", bonusText: "+2k per Mash", mash: 2000, multiplier: 0 },
        ],
      },
      {
        name: "Web Scraping Shenanigans",
        parent: "Python",
        cost: 500000,
        description:
          "Master the art of web scraping and extract hidden treasures of data from the vast realms of the internet.",
        areas: ["Data Extraction", "Web Data Mining"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Python Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Skynet Activation",
        parent: "Python",
        cost: 1000000,
        description:
          "Dive into the realm of artificial intelligence and predictive modeling. Will you create the next Skynet or save humanity?",
        areas: ["Artificial Intelligence", "Predictive Modeling"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Java",
    difficulty: "Beginner",
    description: "Building castles in code!",
    cost: 1000000,
    mashPerSec: 20000,
    areas: ["Software Development", "Back-end Development"],
    perks: [
      {
        name: "Verbose much?",
        parent: "Java",
        cost: 2000000,
        description:
          "Embrace the verbosity! Write novels of code with meticulous details, leaving no stone unturned in the quest for precision.",
        areas: ["Software Design", "Modularity"],
        bonus: [
          { type: "mash", bonusText: "+20k per Mash", mash: 20000, multiplier: 0 },
        ],
      },
      {
        name: "Database Dominator",
        parent: "Java",
        cost: 5000000,
        description:
          "Rule the databases like a mighty monarch, wielding the power of Java to conquer the realm of data persistence and management.",
        areas: ["Data Persistence", "Database Management"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Java Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Checked Exception Enigma",
        parent: "Java",
        cost: 10000000,
        description:
          "Unlock the mysteries of checked exceptions, a puzzle wrapped in a conundrum. Navigate the intricate paths of error handling with finesse!",
        areas: ["API Development", "Integration"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Ruby",
    difficulty: "Beginner",
    description: "The elegant art of code poetry.",
    cost: 10000000,
    mashPerSec: 200000,
    areas: ["Web Development", "Scripting"],
    perks: [
      {
        name: "GEMS!!!",
        parent: "Ruby",
        cost: 20000000,
        description:
          "Dive into the treasure trove of Ruby gems! Unleash the power of community-contributed code and bring magic to your projects.",
        areas: ["Web Development", "Rapid Prototyping"],
        bonus: [
          { type: "mash", bonusText: "+200k per Mash", mash: 200000, multiplier: 0 },
        ],
      },
      {
        name: "Metamagic",
        parent: "Ruby",
        cost: 50000000,
        description:
          "Step into the realm of metaprogramming, where you bend the laws of coding reality. Shape and mold your code with spellbinding flexibility.",
        areas: ["Code Generation", "Dynamic Programming"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Ruby Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Chooo Chooo!",
        parent: "Ruby",
        cost: 100000000,
        description:
          "All aboard the Ruby on Rails express! Journey through the vast landscape of web development with speed, efficiency, and a touch of elegance.",
        areas: ["Code Reusability", "Package Management"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "C++",
    difficulty: "Intermediate",
    description: "High-performance systems programming language",
    cost: 100000000,
    mashPerSec: 2000000,
    areas: ["System Programming", "Game Development"],
    perks: [
      {
        name: "*Pointer here, *pointer there",
        parent: "C++",
        cost: 200000000,
        description:
          "Navigate the treacherous world of pointers with caution, for one wrong move can lead to memory leaks and undefined behavior!",
        areas: ["Resource Optimization", "Low-level Programming"],
        bonus: [
          { type: "mash", bonusText: "+2M per Mash", mash: 2000000, multiplier: 0 },
        ],
      },
      {
        name: "Simulate Smoke",
        parent: "C++",
        cost: 500000000,
        description:
          "Bring virtual smoke to life with the power of WebGL. Watch as your graphics programming skills create mesmerizing visual effects.",
        areas: ["Generic Programming", "Compile-time Optimization"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles C++ Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "TrashTalk C",
        parent: "C++",
        cost: 1000000000,
        description:
          "Challenge the ancient C programming language to prove your dominance. Show no mercy as you unleash your C++ superiority!",
        areas: ["Computer Graphics", "Interactive Applications"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Swift",
    difficulty: "Intermediate",
    description: "Modern and safe programming language for iOS and macOS",
    cost: 1000000000,
    mashPerSec: 20000000,
    areas: ["Mobile App Development", "iOS Development"],
    perks: [
      {
        name: "Get a job at Apple",
        parent: "Swift",
        cost: 2000000000,
        description:
          "Unlock the ultimate achievement: a golden ticket to the Apple headquarters. Become part of the elite iOS development team!",
        areas: ["iOS Development", "User Interface Design"],
        bonus: [
          { type: "mash", bonusText: "+20M per Mash", mash: 20000000, multiplier: 0 },
        ],
      },
      {
        name: "Become A hipster",
        parent: "Swift",
        cost: 5000000000,
        description:
          "Immerse yourself in the world of hipster developers. Grow a trendy beard and sip artisanal coffee while writing Swift code.",
        areas: ["Data Persistence", "Database Management"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Swift Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Combine Magic",
        parent: "Swift",
        cost: 10000000000,
        description:
          "Unleash the power of Combine, the reactive programming framework. Harness the flow of data and control the tides of asynchronous operations.",
        areas: ["Reactive Programming", "Asynchronous Operations"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Go",
    difficulty: "Intermediate",
    description: "Efficient and concurrent programming language",
    cost: 10000000000,
    mashPerSec: 200000000,
    areas: ["Backend Development", "Network Applications"],
    perks: [
      {
        name: "Brag about your Google internship",
        parent: "Go",
        cost: 20000000000,
        description:
          "Impress your friends with stories of your legendary Google internship. Let them know you're part of the Go language's inner circleand wield the power of efficient and concurrent programming like a true Go ninja!",
        areas: ["Concurrency", "Parallelism"],
        bonus: [
          { type: "mash", bonusText: "+2 per Mash", mash: 2, multiplier: 0 },
        ],
      },
      {
        name: "Goroutine Ninjas",
        parent: "Go",
        cost: 50000000000,
        description:
          "Master the art of goroutines and channels, the secret weapons of Go. Conquer the realm of code reusability and achieve maximum efficiency!",
        areas: ["Code Reusability", "Efficiency"],
        bonus: [
          {
            type: "multiply",
            bonusText: "Doubles Go Effectiveness",
            mash: 0,
            multiplier: 2,
          },
        ],
      },
      {
        name: "Code Simplicity!",
        parent: "Go",
        cost: 100000000000,
        description:
          "Embrace the elegance of simplicity with Go. Write clean and concise code that speaks volumes with its efficiency and effectiveness.",
        areas: ["Web Development", "API Development"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
  {
    name: "Rust",
    difficulty: "Advanced",
    description: "Safe and concurrent systems programming language",
    cost: 100000000000,
    mashPerSec: 2000000000,
    areas: ["System Programming", "Embedded Systems"],
    perks: [
      {
        name: "Safe but firm",
        parent: "Rust",
        cost: 200000000000,
        description:
          "With Rust, you can have the best of both worlds: safety and performance. Embrace the firm grip of Rust's memory management and conquer the world of concurrency!",
        areas: ["Memory Management", "Concurrency"],
        bonus: [
          { type: "mash", bonusText: "+200M per Mash", mash: 200000000, multiplier: 0 },
        ],
      },
      {
        name: "Be",
        parent: "Crabsticks",
        cost: 500000000000,
        description:
          "Dive into the fascinating world of asynchronous programming with async/await in Rust. Be as nimble and agile as a crab wielding Rust's powerful concurrency features!",
        areas: ["Asynchronous Operations", "Concurrency"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
      {
        name: "Embedded Systems",
        parent: "Rust",
        cost: 1000000000000,
        description:
          "Enter the realm of embedded systems and unleash Rust's full potential in the IoT world. Build the future where every device is powered by the strength of Rust!",
        areas: ["IoT Development", "Embedded Programming"],
        bonus: [
          { type: "secret", bonusText: "NERD OUT!", mash: 0, multiplier: 0 },
        ],
      },
    ],
  },
];
export default upgradesConfig;

