export interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "My First Blog",
    shortDescription: "This is my very first blog post about learning React!",
    content: "Today I learned how to create a simple blog using React and React Router. It's amazing how easy it is to create web applications with these tools!"
  },
  {
    id: 2,
    title: "Learning React Router",
    shortDescription: "Understanding the basics of React Router",
    content: "React Router is a powerful tool that helps us create multi-page applications in React. We can create different routes and navigate between them easily."
  },
  {
    id: 3,
    title: "Syncer Skill Training",
    shortDescription: "The Syncer Skill Training Program is equipping me with hands-on knowledge and practical experience in the MERN stack, helping me build real-world web applications while strengthening my skills in MongoDB, Express.js, React.js, and Node.js.",
    content: "The Syncer Skill Training Program has been instrumental in helping me build a strong foundation in the MERN stack by offering a structured, project-based learning environment. Through guided modules, I’ve gained in-depth knowledge of MongoDB for database management, Express.js for backend APIs, React.js for dynamic frontends, and Node.js for server-side logic. The program emphasizes real-time coding, collaborative problem-solving, and practical implementation of concepts. It has boosted my confidence in full-stack development, improved my debugging and deployment skills, and prepared me to take on real-world web development projects with a solid understanding of how all layers of a modern web application interact."
  }
];