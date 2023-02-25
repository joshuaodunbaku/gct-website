export const data = {
  courses: [
    {
      id: 1,
      name: "HTML",
      imgPath: require("./Assets/Images/HTML1.png"),
      preview: `HTML which stands for HyperText Markup Language is the code that is used to structure a web page and its content`,
      category: ["Web Design", "Web Development", "Front-End"],
      tutor: "Odunbaku Joshua",
    },
    {
      id: 2,
      name: "CSS",
      imgPath: require("./Assets/Images/pexels-css.jpg"),
      preview:
        "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
      category: ["Web Design", "Web Development", "Front-End"],
      tutor: "Odunbaku Joshua",
    },
    {
      id: 3,
      name: "Bootstrap",
      imgPath: require("./Assets/Images/bootStrap.jpeg"),
      preview:
        "Bootstrap is a free front-end framework for faster and easier web development",
      category: ["Framework", "Web Design", "Front-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 7,
      name: "JavaScript",
      imgPath: require("./Assets/Images/JS2.jpeg"),
      preview:
        "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
      category: ["Web Development", "Web Design", "Front-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 4,
      name: "ReactJS",
      imgPath: require("./Assets/Images/react-js.jpg"),
      preview:
        "React is a JavaScript library for building user interfaces. React is used to build single-page applications",
      category: ["Library", "Web Development", "Front-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 5,
      name: "Data Strucutures and Algorithm",
      imgPath: require("./Assets/Images/databaseStructure.png"),
      preview:
        "Learning data structures and algorithms allow us to write efficient and optimized computer programs.",
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 8,
      name: "NodeJs",
      imgPath: require("./Assets/Images/node-js.png"),
      preview:
        "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser",
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },

    {
      id: 9,
      name: "MongoDB",
      imgPath: require("./Assets/Images/mongodb.avif"),
      preview:
        "MongoDB is the world's most popular NoSQL database used to build highly available and scalable internet applications",
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },

    {
      id: 10,
      name: "MySQL",
      imgPath: require("./Assets/Images/unsplash-mysql.jpg"),
      preview:
        "MySQL is a widely used relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL). MySQL is free and open-source. MySQL is ideal for both small and large applications",
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 13,
      name: "Java",
      imgPath: require("./Assets/Images/JavaP.jpeg"),
      preview:
        "Learn how to develop and engineer an advanced database website using Java as your back-end web development training.",
      category: ["Software Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 14,
      name: "Git & GitHub",
      imgPath: require("./Assets/Images/pexels-git.jpeg"),
      preview:
        "GitHub is the largest host of source code in the world. At the heart of GitHub is an open source version control system (VCS) called Git. Git is responsible for everything GitHub-related that happens locally on your computer.",
      category: ["Web Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 15,
      name: "Mobile App Development",
      imgPath: require("./Assets/Images/mobile_development.png"),
      preview:
        "Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS",
      category: ["Software Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 16,
      name: "Web Programming",
      imgPath: require("./Assets/Images/webProgramming.jpg"),
      preview:
        "Web development is the work involved in developing a website for the Internet or an intranet.",
      category: ["Software Development", "Web Development"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 17,
      name: "Cyber Security",
      imgPath: require("./Assets/Images/cyberSecurity.jpg"),
      preview:
        "Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized information",
      category: ["Software Engineering", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 19,
      name: "SQL",
      imgPath: require("./Assets/Images/unsplash-sql.jpg"),
      preview:
        "SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.",
      category: ["Database Management", "Web Development", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 20,
      name: "Database Management",
      imgPath: require("./Assets/Images/databaseManagement.jpg"),
      preview:
        "Learn how to develop and engineer an advanced database website using Java as your back-end web development training.",
      category: ["Database Management"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 23,
      name: "Software Architecture",
      imgPath: require("./Assets/Images/softwareArchitecture.png"),
      preview:
        "Software architecture is the set of structures needed to reason about a software system and the discipline of creating such structures and systems.",
      category: ["Software Engineering", "Back-End"],
      tutor: "Ibrahim Adubi",
    },
    {
      id: 24,
      name: "MicroService",
      imgPath: require("./Assets/Images/microservices.avif"),
      preview:
        "Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs.",
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
