# MyBlogApp

This is a blog application that allows users to create an account, login, and logout. Users can create, edit, and delete their own blog posts, which consist of a title, body, and optional image. The application also provides features for listing all blog posts, viewing individual posts, and searching for posts by title or author. The user interface is clean, intuitive, and responsive, accessible on both desktop and mobile devices.

## Features
- User Authentication: Users can create an account, login, and logout. Passwords are securely hashed and stored.
- Blog Post Creation: Users can create, edit, and delete their own blog posts. Each post has a title, body, and an optional image.
- Blog Post Listing: All users can view a list of all blog posts. Each post displays the author's name, post title, post body, and date created.
- Blog Post Viewing: Users can click on a blog post to view its full content.
- Blog Post Search: Users can search for blog posts by title or author.
- UI/UX: The application has a clean and intuitive user interface. It is responsive and accessible on desktop and mobile devices.

## Technical Stack
The blog application is built using the following technologies:

- Frontend: Next.js (optimized for performance)
- Backend: Node.js
- Database: MongoDB

## Getting Started
To run the blog application locally, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/blog-application.git
2. Install dependencies: cd blog-application && npm install
3. Configure the database: Create a MongoDB instance and update the database configuration in config.js with your connection details.
4. Start the backend server: npm run start
5. Start the frontend development server: npm run dev
6. Open your browser and visit http://localhost:3000/login to access the blog application.

## API Endpoints
The blog application follows RESTful conventions and provides the following API endpoints:

- POST /api/users/register: Create a new user account.
- POST /api/users/login: Authenticate and log in a user.
- GET /api/users/logout: Log out the current user.
- GET /api/posts: Get a list of all blog posts.
- POST /api/posts: Create a new blog post.
- GET /api/posts/:postId: Get a specific blog post.
- PUT /api/posts/:postId: Update a specific blog post.
- DELETE /api/posts/:postId: Delete a specific blog post.

## Security
User authentication is implemented using JSON Web Tokens (JWT) and cookies. Passwords are securely hashed and stored in the database. The application follows best practices to prevent common security vulnerabilities.

## Database Schema
The blog application uses a normalized database schema to store user and blog post data. The schema includes the following collections:

- users: Stores user account information.
- posts: Stores blog post data.
