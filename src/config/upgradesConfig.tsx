const programmingLanguages = {
  HTML: {
    difficulty: "Beginner",
    description: "Build Website Structures",
    areas: ["Web Development", "Front-end Development"],
    upgrades: [
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
  CSS: {
    difficulty: "Beginner",
    description: "Style Website Elements",
    areas: ["Web Development", "Front-end Development"],
    upgrades: [
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
  JavaScript: {
    difficulty: "Beginner",
    description: "Make Websites Interactive",
    areas: ["Web Development", "Front-end Development"],
    upgrades: [
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
  Python: {
    difficulty: "Beginner",
    description: "General-purpose Programming",
    areas: ["Software Development", "Data Analysis"],
    upgrades: [
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
  Java: {
    difficulty: "Beginner",
    description: "Versatile and Robust",
    areas: ["Software Development", "Android Development"],
    upgrades: [
      {
        name: "Android App Development",
        cost: 10,
        description: "Create mobile applications for Android devices using the Java programming language.",
        areas: ["Mobile Development", "App Development"],
      },
      {
        name: "Enterprise-level Applications",
        cost: 15,
        description: "Develop large-scale, robust software solutions for enterprise-level applications.",
        areas: ["Enterprise Software", "Application Development"],
      },
      {
        name: "Game Development",
        cost: 30,
        description: "Build games using Java and popular frameworks like LibGDX or jMonkeyEngine.",
        areas: ["Game Development", "Interactive Applications"],
      },
    ],
  },
  C: {
    difficulty: "Intermediate",
    description: "Efficient and Low-level Programming",
    areas: ["Systems Programming", "Embedded Systems"],
    upgrades: [
      {
        name: "Network Programming",
        cost: 10,
        description: "Develop networking applications using C.",
        areas: ["Network Protocols", "Socket Programming"],
      },
      {
        name: "Operating Systems",
        cost: 15,
        description: "Contribute to operating system development or create your own using C.",
        areas: ["Kernel Development", "System Software"],
      },
      {
        name: "Microcontroller Programming",
        cost: 30,
        description: "Write firmware and control hardware using C for embedded systems.",
        areas: ["Embedded Systems", "IoT"],
      },
    ],
  },
  CSharp: {
    difficulty: "Intermediate",
    description: "Modern and Object-oriented",
    areas: ["Software Development", "Game Development"],
    upgrades: [
      {
        name: "Web Development with ASP.NET",
        cost: 10,
        description: "Build web applications using C# and the ASP.NET framework.",
        areas: ["Web Development", "Server-side Programming"],
      },
      {
        name: "Desktop Application Development",
        cost: 15,
        description: "Create Windows desktop applications using C# and Windows Forms or WPF.",
        areas: ["Desktop Development", "GUI Programming"],
      },
      {
        name: "Game Development with Unity",
        cost: 30,
        description: "Develop games using C# and the Unity game engine.",
        areas: ["Game Development", "Game Engines"],
      },
    ],
  },
  CPlusPlus: {
    difficulty: "Intermediate",
    description: "Powerful and High-performance",
    areas: ["Systems Programming", "Game Development"],
    upgrades: [
      {
        name: "Object-oriented Programming",
        cost: 10,
        description: "Learn advanced object-oriented programming techniques with C++.",
        areas: ["Object-oriented Design", "Software Engineering"],
      },
      {
        name: "Multithreading",
        cost: 15,
        description: "Create concurrent programs with C++ using threads and synchronization primitives.",
        areas: ["Parallel Programming", "Concurrency"],
      },
      {
        name: "Graphics Programming",
        cost: 30,
        description: "Explore computer graphics and create visually stunning applications using C++.",
        areas: ["Graphics Programming", "Visualization"],
      },
    ],
  },
  Ruby: {
    difficulty: "Intermediate",
    description: "Elegant and Productive",
    areas: ["Web Development", "Scripting"],
    upgrades: [
      {
        name: "Web Development with Ruby on Rails",
        cost: 10,
        description: "Build web applications rapidly using Ruby on Rails framework.",
        areas: ["Web Development", "Server-side Programming"],
      },
      {
        name: "Scripting and Automation",
        cost: 15,
        description: "Automate tasks and write scripts efficiently with Ruby.",
        areas: ["Scripting", "Task Automation"],
      },
      {
        name: "Web Scraping",
        cost: 30,
        description: "Extract data from websites programmatically using Ruby and libraries like Nokogiri.",
        areas: ["Data Extraction", "Web Data Mining"],
      },
    ],
  },
  PHP: {
    difficulty: "Intermediate",
    description: "Web Development with a Server-side Focus",
    areas: ["Web Development", "Server-side Programming"],
    upgrades: [
      {
        name: "Content Management Systems",
        cost: 10,
        description: "Build dynamic websites and applications using PHP-based CMS platforms like WordPress or Drupal.",
        areas: ["CMS Development", "Web Publishing"],
      },
      {
        name: "E-commerce Development",
        cost: 15,
        description: "Create online stores and e-commerce websites using PHP and popular frameworks like Magento or WooCommerce.",
        areas: ["E-commerce", "Online Shopping"],
      },
      {
        name: "Web Security",
        cost: 30,
        description: "Learn about web security best practices and implement secure solutions with PHP.",
        areas: ["Web Security", "Secure Programming"],
      },
    ],
  },
  Swift: {
    difficulty: "Intermediate",
    description: "iOS, macOS, watchOS, and tvOS Development",
    areas: ["Mobile Development", "App Development"],
    upgrades: [
      {
        name: "iOS App Development",
        cost: 10,
        description: "Create mobile applications for iOS devices using the Swift programming language.",
        areas: ["iOS Development", "App Development"],
      },
      {
        name: "Mac App Development",
        cost: 15,
        description: "Build applications for macOS using Swift and the AppKit or SwiftUI frameworks.",
        areas: ["Mac Development", "Desktop Applications"],
      },
      {
        name: "WatchOS and tvOS Development",
        cost: 30,
        description: "Extend your skills to develop apps for Apple Watch and Apple TV using Swift.",
        areas: ["Wearable Development", "TV Development"],
      },
    ],
  },
  TypeScript: {
    difficulty: "Intermediate",
    description: "Typed Superset of JavaScript",
    areas: ["Web Development", "Front-end Development"],
    upgrades: [
      {
        name: "Angular Framework",
        cost: 10,
        description: "Build scalable web applications using TypeScript with the Angular framework.",
        areas: ["Web Development", "Front-end Development"],
      },
      {
        name: "React with TypeScript",
        cost: 15,
        description: "Develop web user interfaces with React and TypeScript for better type safety.",
        areas: ["Front-end Development", "User Interfaces"],
      },
      {
        name: "Node.js Development",
        cost: 30,
        description: "Create server-side applications using TypeScript with the Node.js runtime environment.",
        areas: ["Back-end Development", "Server-side Programming"],
      },
    ],
  },
  Rust: {
    difficulty: "Intermediate",
    description: "Fast, Safe, and Concurrent",
    areas: ["Systems Programming", "Web Development"],
    upgrades: [
      {
        name: "Web Backend Development",
        cost: 10,
        description: "Build high-performance web servers and backends using Rust.",
        areas: ["Web Development", "Server-side Programming"],
      },
      {
        name: "Embedded Systems",
        cost: 15,
        description: "Develop low-level software for embedded systems using Rust.",
        areas: ["Embedded Systems", "IoT"],
      },
      {
        name: "System-level Programming",
        cost: 30,
        description: "Create system-level software and utilities with Rust.",
        areas: ["System Programming", "Operating Systems"],
      },
    ],
  },
  Go: {
    difficulty: "Intermediate",
    description: "Efficient and Concurrent Programming",
    areas: ["Systems Programming", "Backend Development"],
    upgrades: [
      {
        name: "Concurrency and Goroutines",
        cost: 10,
        description: "Write concurrent programs easily with Goroutines and channels in Go.",
        areas: ["Parallel Programming", "Concurrent Systems"],
      },
      {
        name: "Web Backend Development",
        cost: 15,
        description: "Build high-performance web servers and APIs using Go.",
        areas: ["Web Development", "Server-side Programming"],
      },
      {
        name: "Network Programming",
        cost: 30,
        description: "Develop networking applications and protocols using Go.",
        areas: ["Network Programming", "Distributed Systems"],
      },
    ],
  },
  Kotlin: {
    difficulty: "Intermediate",
    description: "Modern and Concise",
    areas: ["Android Development", "Backend Development"],
    upgrades: [
      {
        name: "Android App Development",
        cost: 10,
        description: "Create mobile applications for Android devices using the Kotlin programming language.",
        areas: ["Mobile Development", "App Development"],
      },
      {
        name: "Backend Development with Spring Boot",
        cost: 15,
        description: "Build web applications and APIs using Kotlin with the Spring Boot framework.",
        areas: ["Web Development", "Server-side Programming"],
      },
      {
        name: "Multiplatform Development",
        cost: 30,
        description: "Develop applications that run on multiple platforms (Android, iOS, web) using Kotlin Multiplatform.",
        areas: ["Cross-platform Development", "Mobile Development"],
      },
    ],
  },
  Scala: {
    difficulty: "Advanced",
    description: "Functional and Object-oriented",
    areas: ["Backend Development", "Big Data"],
    upgrades: [
      {
        name: "Akka Framework",
        cost: 10,
        description: "Build highly concurrent and distributed applications with Scala and the Akka framework.",
        areas: ["Concurrency", "Distributed Systems"],
      },
      {
        name: "Spark and Big Data Processing",
        cost: 15,
        description: "Perform large-scale data processing and analytics using Scala with Apache Spark.",
        areas: ["Big Data", "Data Analysis"],
      },
      {
        name: "Play Framework",
        cost: 30,
        description: "Develop web applications using Scala with the Play framework.",
        areas: ["Web Development", "Server-side Programming"],
      },
    ],
  },
 }

 export default programmingLanguages;