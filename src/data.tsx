export interface Data {
  soheyl: {
    description: string;
  };
  skills: {
    skill: {
      img: string;
      name: string;
      id: string;
      desc: {
        header: string;
        desc: string;
      };
    }[];
  };
  projects: {
    project: {
      description: string;
      name: string;
      id: string;
      page: string;
      source: string;
      img: string;
    }[];
  };
}

const data: Data = {
  soheyl: {
    description:
      "I'm passionate about creating beautiful and user-friendly web experiences. As a front-end developer, I enjoy turning ideas into interactive websites and applications. My journey started with HTML, CSS, and JavaScript, I continue learning and improving myself everyday to become a professional developer.",
  },

  skills: {
    skill: [
      {
        img: "html.png",
        name: "HTML",
        id: "s-1",
        desc: {
          header: "HTML (HyperText Markup Language)",
          desc: "HTML is the standard language used to structure and define the content of web pages. It uses tags like <div>, <h1>, <p>, and <a> to specify elements such as text, images, videos, and links. Think of it as the skeleton of a website that organizes information for display in a browser.",
        },
      },
      {
        img: "css.png",
        name: "CSS",
        id: "s-2",
        desc: {
          header: `CSS (Cascading Style Sheets)
`,
          desc: `CSS controls the appearance and layout of HTML elements. It defines styles like colors, fonts, spacing, animations, and responsiveness. CSS allows developers to make websites visually appealing and adaptable to various devices and screen sizes.`,
        },
      },
      {
        img: "js.png",
        name: "JavaScript",
        id: "s-3",
        desc: {
          header: "JavaScript",
          desc: "JavaScript is a programming language that adds interactivity and dynamic behavior to websites. It's used to create features like dropdown menus, animations, real-time form validation, and API integration. JavaScript is versatile, running on both browsers and servers.",
        },
      },
      {
        img: "react.png",
        name: "React",
        id: "s-4",
        desc: {
          header: "React",
          desc: `React is a JavaScript library for building user interfaces, developed by Facebook. It simplifies the creation of interactive and component-based web applications. React allows developers to:

Create reusable components like buttons or modals.
Manage dynamic data with state and props.
Use a virtual DOM for fast and efficient updates.
React makes building complex and high-performance apps easier and is widely used for modern web development.

`,
        },
      },
      {
        img: "tailwind.png",
        name: "Tailwind",
        id: "s-5",
        desc: {
          header: `Tailwind CSS
`,
          desc: "Tailwind is a utility-first CSS framework that provides pre-designed classes for styling HTML elements. Unlike traditional CSS frameworks (like Bootstrap), Tailwind allows you to compose custom designs by combining small utility classes like text-red-500, bg-gray-100, or flex.",
        },
      },
      {
        img: "git.png",
        name: "Git",
        id: "s-6",
        desc: {
          header: "Git",
          desc: "Git is a version control system that helps developers track and manage changes to their codebase. It's widely used in collaborative development to ensure smooth coordination and history management.",
        },
      },
      {
        img: "ts.png",
        name: "TypeScript",
        id: "s-7",
        desc: {
          header: "TypeScript",
          desc: "",
        },
      },
    ],
  },

  projects: {
    project: [
      {
        name: "Portfolio",
        id: "p-1",
        page: "https://SoheylAshena.github.io",
        source: "https://github.com/SoheylAshena/SoheylAshena.github.io",
        img: "portfolio.jpg",
        description: "",
      },
      {
        name: "To-Do list",
        id: "p-2",
        page: "https://SoheylAshena.github.io/TooDoo",
        source: "https://github.com/SoheylAshena/TooDoo",
        img: "TooDoo.jpg",
        description: "",
      },
      {
        name: "Recipe Finder App",
        id: "p-3",
        page: "https://spoonacular-recipe-finder.vercel.app",
        source: "https://github.com/SoheylAshena/Spoonacular-recipe-finder",
        img: "Spoonacular.jpg",
        description: "",
      },
    ],
  },
};
export default data;
