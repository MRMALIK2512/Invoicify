
# Invoicify

Invoicify is a web-based invoicing application designed to help businesses manage their invoices with ease. The platform allows users to create, send, and track invoices, view payment history, and upload their business logo. Google authentication is also integrated to make logging in quick and secure.

## Technologies Used

This project was created using the following technologies:

### Client
- **React JS** – A JavaScript library for building user interfaces.
- **Redux** – For managing and centralizing application state.
- **React-router-dom** – For handling routing in a React application.
- **Axios** – For making API calls.
- **Material UI & CSS Module** – For designing the user interface.
- **React-simple-snackbar** – To display success/error notifications.
- **Cloudinary** – To allow users to upload their business logo.
- **Apex Charts** – For displaying payment history via charts.
- **React-google-login** – To enable authentication using Google.

### Server
- **Express** – A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose** – A MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT (JSON Web Token)** – For handling authentication and security.
- **bcryptjs** – For hashing passwords and ensuring data encryption.
- **Nodemailer** – For sending invoices via email.
- **html-pdf** – For generating invoice PDFs.

### Database
- **MongoDB (MongoDB Atlas)** – A NoSQL database to store data securely in the cloud.

## Configuration and Setup

To run this project locally, follow the steps below:

### Step 1: Fork and Clone the Repository
1. Fork this repository to your own GitHub account.
2. Clone it to your local machine or download it as a zip and unzip the files.

### Step 2: Open in Code Editor
1. Open the project in your preferred code editor.
2. Open a terminal window.

### Step 3: Split the Terminal
You’ll need to run both the client and server on separate terminals.

### First Terminal (Client)
1. Navigate to the client directory: 
   ```bash
   cd client
   ```
2. Create a `.env` file in the root of your client directory.
3. Add the following environment variables to the `.env` file:

   ```
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
   REACT_APP_API=http://localhost:5000
   REACT_APP_URL=http://localhost:3000
   ```

   To get your Google ClientID for authentication, visit the [Google Credentials Page](https://console.cloud.google.com/apis/credentials). If you're new, [create a new project](https://console.cloud.google.com/projectcreate) and follow the steps to obtain the ClientID.

4. Install the client-side dependencies:
   ```bash
   npm install
   ```
5. Start the client:
   ```bash
   npm start
   ```

### Second Terminal (Server)
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Create a `.env` file in the root of your server directory.
3. Add the following environment variables to the `.env` file:

   ```
   DB_URL=your-mongodb-url
   PORT=5000
   SECRET=your-jwt-secret
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_USER=your-smtp-user
   SMTP_PASS=your-smtp-password
   ```

   Follow [this tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your MongoDB connection URL, which will be used as the `DB_URL`.

4. Install the server-side dependencies:
   ```bash
   npm install
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Troubleshooting

If you encounter issues with sending or downloading PDFs, please run the following commands in your server terminal:

```bash
npm install html-pdf -g
npm link html-pdf
npm link phantomjs-prebuilt
```
## Author

- **Malik Umar Taabish** – [GitHub](https://github.com/MRMALIK2512) | [LinkedIn](https://www.linkedin.com/in/malikumartaabish/)