# Lunchly 🍽️

Welcome to **Lunchly**, a simple yet powerful application for managing restaurant reservations and customer information. This app helps restaurant staff keep track of their customers and reservations efficiently.

## Features ✨

- **Customer Management**: Add, edit, and view customer details.
- **Reservation Management**: Add reservations for customers.
- **Customer and Reservation Views**: Easily view customer details and their associated reservations.

## Table of Contents 📑

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Example Requests](#example-requests)
- [License](#license)

## Installation 🛠️

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/lunchly.git
   cd lunchly
   ```

   Install dependencies:

bash
Copy code
npm install
Set up the database:

Make sure you have PostgreSQL installed and running. Create a database and configure the connection in your environment variables.

bash
Copy code
createdb lunchly
Run database migrations:

bash
Copy code
npm run migrate
Start the application:

bash
Copy code
npm start
Access the app:

Open your browser and navigate to http://localhost:3000.

## Usage 🚀

Homepage: Lists all customers.
Add Customer: Use the form to add a new customer.
Edit Customer: Edit existing customer information.
Customer Details: View detailed information about a customer, including their reservations.
Add Reservation: Add a new reservation for a customer.

## Routes 🌐

Customers
GET /: Show list of customers.
GET /add/: Show form to add a new customer.
POST /add/: Handle adding a new customer.
GET /
/: Show a customer's details.
GET /
/edit/: Show form to edit a customer.
POST /
/edit/: Handle editing a customer.
Reservations
POST /
/add-reservation/: Handle adding a new reservation.
Example Requests 📬
Add a New Customer
Endpoint: POST /add/
Body:
json

```js
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "123-456-7890",
  "notes": "Likes window seat"
}
Add a New Reservation
Endpoint: POST /:id/add-reservation/
Body:
json
Copy code
{
  "startAt": "2024-07-01T12:00:00.000Z",
  "numGuests": 4,
  "notes": "Birthday celebration"
}
```
