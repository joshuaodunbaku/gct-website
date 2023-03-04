export const data = {
  courses: [
    {
      id: 4,
      name: "ReactJS",
      imgPath: require("./Assets/Images/react-js.jpg"),
      info: {
        preview:
          "React is a JavaScript library for building user interfaces. React is used to build single-page applications",
        note: "This course includes topics from Javascript courses",
        additionalInfo: "",
        topics: [
          "Introduction to JavaScript",
          "React Component",
          "Props and States",
          "Lifecycle Hooks",
          "Pagination, Filtering & Sorting",
          "Routing",
          "Forms",
          "Calling backend services(axios)",
          "Authenticating & Authorization",
          "Hooks",
          "Higher Order Components(HOC)",
          "Deployment",
        ],
      },
      category: ["Library", "Web Development", "Front-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 5,
      name: "Data Strucutures and Algorithms",
      imgPath: require("./Assets/Images/databaseStructure.png"),
      info: {
        preview:
          "Learning data structures and algorithms allow us to write efficient and optimized computer programs.",
        note: "",
        additionalInfo:
          "We include discrete Maths as a prerequisite to our Data Structure and Algorithms(DSA). We make use of the following materials for our Discrete Maths course:- Discrete Mathematics & its Application by Kenneth H. Rosen, Discrete Mathematics - An Open Introduction by Oscar Levin. \nListed are the materials used for our DSA *Introduction to Algorithms - CLRS *Introduction to Algorithms - A creative Approach by Udi Manber",
        topics: [
          "Analysis of Algorithms(Time & Space Complexity)",
          "Divide & Conquer",
          "Probablistic Analysis",
          "Design of Algorithms by Induction",
          "Algorithms involving Sequences & Sets",
          "Geometric Algorithms",
          "Algebraic & Numeric Algorithms",
          "Data Structures",
          "Graph Algorithms",
          "Parallel Algorithms",
        ],
      },

      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 8,
      name: "NodeJs",
      imgPath: require("./Assets/Images/node-js.png"),
      info: {
        preview:
          "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser",
        note: "This course inlcudes topics from JavaScript course",
        additionalInfo: "",
        topics: [
          "Introduction to JavaScript",
          "Downloading and Installing Node",
          "File System",
          "Node Package Manager (NPM) modules",
          "Error Propagation and Interception",
          "Event & Emitter",
          "Web Server",
          "Express JS",
          "Middleware",
          "Routing",
          "MVC REST API",
          "Authentication",
          "JWT Auth",
          "Connecting to Database (MySQL)",
          "Data Models",
          "Async CRUD",
        ],
      },
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 7,
      name: "JavaScript",
      imgPath: require("./Assets/Images/JS2.jpeg"),
      info: {
        preview:
          "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
        note: "",
        additionalInfo: "",
        topics: [
          "Introduction to JavaScript",
          "Variables & Constants",
          "Data types: Primitives & Reference",
          "Dynamic Typing",
          "Operators (Unary, Binary & Tenary)",
          "Control Flows (if, if/else, switch, loops etc)",
          "Objects",
          "Arrays",
          "Functions",
          "OOP",
          "ES6 Tools (Webpack, Babel etc)",
        ],
      },
      category: ["Web Development", "Web Design", "Front-End"],
      tutor: "Ibrahim Adubi",
    },

    {
      id: 10,
      name: "Database Management System (MySQL)",
      imgPath: require("./Assets/Images/databaseManagement.jpg"),
      info: {
        preview:
          "Learn how to develop and engineer an advanced database website using Java as your back-end web development training.",
        note: "",
        additionalInfo:
          "MySQL is a widely used relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL). MySQL is free and open-source. MySQL is ideal for both small and large applications",
        topics: [
          "SQL Fundamental",
          "Relational Database Fundamentals",
          "Components of SQL (Data Definition Language DDL, Data Control Language)",
          "Database Users (creating accounts) with permission",
          "Building & Maintaining a simple Database Structure",
          "Building a multiple Relational Database",
          "Manipulating Database Data",
          "Providing Database Security",
          "Protecting Data",
        ],
      },
      category: ["Database Management", "Web Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 13,
      name: "Java",
      imgPath: require("./Assets/Images/JavaP.jpeg"),
      info: {
        preview:
          "Learn how to develop and engineer an advanced database website using Java as your back-end web development training.",
        note: "",
        additionalInfo: "",
        topics: [
          "<b> PART 1</b>",
          "Introduction to Java Applications",
          "Variables and Data Types",
          "Control Statement",
          "Methods of Arrays",
          "Classes & Objects",
          "Object Oriented Programming (OOP)",
          "Exception Handling",
          "Strings",
          "Files, Streams & Object Serialization",
          "Introduction to Algorithms (Recursion, Sorting & Searching)",
          "Generic Classes & Collections",
          "Multithreading",
          "Networking",
          "",
          "<b> PART 2</b>",
          "Introduction to Spring framework",
          "IOC & DI in Spring",
          "Spring AOP",
          "Spring IDBC support",
          "Hibernate",
          "Data Access with JPA",
          "Transaction Management",
          "Spring MVC",
          "Postman API",
        ],
      },
      category: ["Software Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 1,
      name: "HTML",
      imgPath: require("./Assets/Images/HTML1.png"),
      info: {
        preview: `HTML which stands for HyperText Markup Language is the code that is used to structure a web page and its content`,
        note: "",
        additionalInfo: "",
        topics: [
          "Introduction to files and Directories",
          "File path",
          "HTML documents",
          "Head, Body & Footer",
          "Paragraph & Line breaker",
          "Bold, Italics and Comments",
          "Links",
          "Images",
          "Tables",
          "Lists",
          "Div elements",
          "Elemtent Positioning",
          "Forms",
        ],
      },
      category: ["Web Design", "Front-End"],
      tutor: "Odunbaku Joshua",
    },
    {
      id: 2,
      name: "CSS",
      imgPath: require("./Assets/Images/pexels-css.jpg"),
      info: {
        preview:
          "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
        note: "",
        additionalInfo: "",
        topics: [
          "Introduction to files & Directories",
          "File Path",
          "CSS Selectors",
          "Pseudo Elements",
          "External Stylesheets",
          "Overriding Styles",
        ],
      },
      category: ["Web Design", "Front-End"],
      tutor: "Odunbaku Joshua",
    },
    {
      id: 3,
      name: "Bootstrap",
      imgPath: require("./Assets/Images/bootStrap.jpeg"),
      info: {
        preview:
          "Bootstrap is a free front-end framework for faster and easier web development",
        note: "",
        additionalInfo: "",
        topics: [],
      },
      category: ["Framework", "Web Design", "Front-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 15,
      name: "Mobile App Development with React Native",
      imgPath: require("./Assets/Images/mobile_development.png"),
      info: {
        preview:
          "Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS",
        note: "",
        additionalInfo: "",
        topics: [],
      },
      category: ["Software Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 14,
      name: "Git & GitHub",
      imgPath: require("./Assets/Images/pexels-git.jpeg"),
      info: {
        preview:
          "GitHub is the largest host of source code in the world. At the heart of GitHub is an open source version control system (VCS) called Git. Git is responsible for everything GitHub-related that happens locally on your computer.",
        note: "",
        additionalInfo: "",
        topics: [],
      },
      category: ["Web Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 16,
      name: "Web Programming",
      imgPath: require("./Assets/Images/webProgramming.jpg"),
      info: {
        preview:
          "Web development is the work involved in developing a website for the Internet or an intranet.",
        note: "",
        additionalInfo: "",
        topics: [],
      },
      category: ["Software Development", "Web Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 17,
      name: "Cyber Security",
      imgPath: require("./Assets/Images/cyberSecurity.jpg"),
      info: {
        preview:
          "Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized information",
        note: "",
        additionalInfo: "",
        topics: [],
      },
      category: ["Software Engineering", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 19,
      name: "SQL",
      imgPath: require("./Assets/Images/unsplash-sql.jpg"),
      info: {
        preview:
          "SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.",
        note: "",
        additionalInfo: "",
        topics: [
          "Introduction",
          "Data & Tables",
          "The SELECT statement",
          "DELETE & UPDATE statement",
          "Smart Table Design (NORMAL Tables)",
          "ALTER Statement",
          "Advance SELECT",
          "Multi-Talbe Operation",
          "Subqueries",
          "Outer Joins",
          "Constraints, Views & Transactions",
          "Database Security",
        ],
      },
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    // {
    {
      id: 23,
      name: "System Design",
      imgPath: require("./Assets/Images/softwareArchitecture.png"),
      info: {
        preview:
          "Software architecture is the set of structures needed to reason about a software system and the discipline of creating such structures and systems.",
        note: "",
        additionalInfo: "",
        topics: [
          "Introduction to System Design",
          "Client-Server Model",
          "Network Protocols",
          "Storage",
          "Latency & Throughput",
          "Availability",
          "Caching",
          "Proxies",
          "Load Balancers",
          "Hashing",
          "Relational Databases",
          "Key-Value Stores",
          "Specialized Storage Paradigms",
          "Replication & Sharding",
          "Leader Election",
          "Peer-To-Peer Networks",
          "Polling & Streaming",
          "Configuration",
          "Rate Limiting",
          "Logging & Monitoring",
          "Publish & Subscribe Patterns",
          "MapReduce",
          "Security & HTTPS",
          "ALL Design",
        ],
      },
      category: ["Software Engineering", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 24,
      name: "MicroService",
      imgPath: require("./Assets/Images/microservices.avif"),
      info: {
        preview:
          "Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs.",
        note: "",
        additionalInfo: "",
        topics: [],
      },
      category: ["Software Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
  ],

  tutors: [],
  students: [
    {
      name: "John Doe",
      review:
        "Best Education coaching ceter, the staff here are very polite, understanding and have a kind nature. Best Web Development institute to get practical knowledge of web development and web design",
      imageUrl: "/public/logo192.png",
    },
    {
      name: "Toluene",
      review:
        "Best Education coaching ceter, the staff here are very polite, understanding and have a kind nature. Best Web Development institute to get practical knowledge of web development and web design",
      imageUrl: "/public/logo192.png",
    },
    {
      name: "Guru",
      review:
        "Best Education coaching ceter, the staff here are very polite, understanding and have a kind nature. Best Web Development institute to get practical knowledge of web development and web design",
      imageUrl: "/public/logo192.png",
    },
    {
      name: "Bash",
      review:
        "Best Education coaching ceter, the staff here are very polite, understanding and have a kind nature. Best Web Development institute to get practical knowledge of web development and web design",
      imageUrl: "/public/logo192.png",
    },
    {
      name: "Malik Berry",
      review:
        "Best Education coaching ceter, the staff here are very polite, understanding and have a kind nature. Best Web Development institute to get practical knowledge of web development and web design",
      imageUrl: "/public/logo192.png",
    },
  ],
};
