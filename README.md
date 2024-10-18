# Facebook Clone

This project is a clone of Facebook, built using Next.js (v14), MySQL, Prisma ORM, and webhooks. The application mimics key features of Facebook, including post management, friend requests, photo uploads, and more.

## Features

- **Post Management**: Users can create, update, and delete posts.
- **Friend Requests**: Users can send friend requests to other users. Recipients can choose to accept or decline requests.
- **Block Users**: Block specific users to prevent them from interacting with you.
- **Photo Uploads**: Users can upload photos to their profiles.
- **Stories**: Users can set stories that are visible for a limited time.
- **More Features**: Additional functionalities will be added over time.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - The latest version of Next.js is used for building the frontend and backend of the application.
- **Database**: [MySQL](https://www.mysql.com/) - The relational database is used for storing user data, posts, friend requests, and other information.
- **ORM**: [Prisma ORM](https://www.prisma.io/) - A modern database toolkit that simplifies database access.
- **Webhooks**: Webhooks are used for real-time communication between different services.
- **Authentication**: [Clerk](https://clerk.dev/) - Used for user authentication and session management.
- **Image Uploads**: [Cloudinary](https://cloudinary.com/) - For image hosting and handling uploaded user content.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/facebook-clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd facebook-clone
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ### **Clerk Authentication**
    ```plaintext
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    CLERK_SECRET_KEY=your-clerk-secret-key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    ```

    ### **Database Configuration**
    ```plaintext
    DATABASE_URL="mysql://root:9445@127.0.0.1:3306/facebook-clone"
    WEBHOOK_SECRET=your-webhook-secret
    ```

    ### **Cloudinary Image Handling**
    ```plaintext
    NEXT_PUBLIC_CLOUDINARY_API_KEY=your-cloudinary-api-key
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    ```

5. Run the Prisma migration to set up the database schema:
    ```bash
    npx prisma migrate dev
    ```

6. Start the development server:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## Database Schema

The database schema is managed by Prisma ORM. You can find the Prisma schema in the `prisma/schema.prisma` file, which defines models for users, posts, friend requests, and more.

## Webhooks

Webhooks are integrated to handle real-time events such as notifications for friend requests, post interactions, and more. These webhooks ensure efficient communication between the frontend and backend services.

## Contributing

Contributions are welcome! If you have suggestions or want to contribute to this project, feel free to open an issue or submit a pull request.

