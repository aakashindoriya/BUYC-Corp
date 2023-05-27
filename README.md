# BUYC - Buy and Sell Old Cars

BUYC is a platform designed for buying and selling old cars. It provides a convenient way for users to connect and make transactions for pre-owned vehicles.

# deployed Link :-  https://buyc-client-aakashindoriya.vercel.app/

## Description

- Users can add OEMs (Original Equipment Manufacturers) to the platform.
- To add an OEM, a user needs to log in with an OEM account.
- Only an Admin can sign up and create OEM users.
- Admin credentials for the project are:
  - Email: aakash@buyc.com
  - Password: buycAdmin
- When signing up as an OEM, the "role" field will be hidden unless logged in as an Admin.
- Once logged in as an OEM, the user will have access to the "Create OEM" form on the right side of the navbar, where they can add OEMs.
- To add a car for sale, users need to log in with a seller account.
- Seller accounts can be created by anyone.
- A seller will have permission to add new cars for sale using OEM options.
- Sellers can also edit and delete cars from the "My Cars" section.
- The "My Cars" section displays a list of all available cars, but users can only edit and delete cars they created.
- Every user can visit the home page by clicking the BUYC logo and see the available cars.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js (v12 or higher)
- npm (Node Package Manager)
- MongoDB
- Git

## Getting Started

To start using BUYC, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository_url>
Move into the server folder:

shell
Copy code
cd BUYC/server
Install the server dependencies:

shell
Copy code
npm install
Create a .env file in the server directory and add the following keys:

plaintext
Copy code
MONGOURL=<MongoDB_connection_URL>
JWT_SECRET=<your_JWT_secret>
Replace <MongoDB_connection_URL> with the URL to your MongoDB instance and <your_JWT_secret> with a secret key for JSON Web Tokens.

Move into the client folder:

shell
Copy code
cd ../buyc-client
Install the client dependencies:

shell
Copy code
npm install
Create a .env file in the buyc-client directory and add the following line:

plaintext
Copy code
REACT_APP_BASEURL="http://localhost:8080"
Start the server:

shell
Copy code
npm start
The server will now be running on http://localhost:8080.

Start the React app:

shell
Copy code
npm start
The React app will be accessible at http://localhost:3000.

Congratulations! You have successfully set up and launched the BUYC platform. You can now start exploring and using the application to buy and sell old cars.
