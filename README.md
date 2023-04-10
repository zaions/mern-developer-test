# MERN Stack Developer - Zaions - Test Overview

## About Zaions

To learn about "Zaions," Please visit our business website
[Zaions.com](https://zaions.com)

Our office location
[Our office Address](https://zaions.com/address)

Other contact info

**Mobile/WhatsApp:**
  +923046619706

**Emails:**
  info@zaions.com (for general queries)
  developer@zaions.com  (any issue/feature request for any of our products)
  hr@zaions.com  (for any career-related emails)
  admin@zaions.com  (only for business mail)

**Slack:**
  zaionsofficial.slack.com

**Skype:**
  live:aoneahsan

## Test Overview

- you will find two other branches in this repo.
  - one named "frontend-react."
  - one named "backend-node."
- in the "frontend-react" branch, we have added a starting point for the test project frontend (to save project setup time for you), and we have included the packages you can (or are supposed to use in this test project). Please do not install any additional packages.
- in the "backend-node" branch, we have added a starting point for the test project backend.
- each frontend and backend project is just a blank project; with Typescript and other packages installed, you will need to configure packages and connect the frontend with the backend as needed.

### Frontend (ReactNative (we will build the web, not the mobile app, but we will use ReactNative components, as our company mainly focuses on mobile app development) + Typescript (as we do not work in JS projects unless the client requires it))

- Screens we need to create in frontend
  - Login screen (to log the user into the app).
  - Products list screen
    - A simple table view to list the projects, with three actions (view, edit, delete)
  - Product add screen
    - a form screen to add a new product
    - fields
      - title
      - description
      - price
      - salePrice
      - isActive
      - orderNo
      - createdAt
      - updatedAt
      - deletedAt
      - userId (created by)   -  (for this test project, create three admin users in the "users" collection (so I will be able to check that only the user who created the product should be able to edit/delete that product). Other users should get a "add to cart" button for products they have not created (on clicking on the "add to cart" button, it will show a simple alert "added," as adding cart functionality to this test will make it a bit lengthy.)
  - Product Edit Screen
    - We will also use this same screen (product add/create screen) for product editing. (Note only the user who added the product should be able to edit that product without another user).
  - Lastly product view screen, here we will show the details in an item list (vertical item list, with key value (e.g., Title:   {productTitle})
    - For product deletion, we will use a modal (on clicking on delete product, we will show a modal, asking the user, "Do you want to delete this product" with two options.
    - Cancel
      - We will close the modal by clicking this button, and nothing will happen.
    - Delete
      - On clicking this button, we will delete the product and show a "success" or "Error" alert, depending on whether the request was successful.

### Backend

- We will create our backend using "NodeJS + ExpressJS + Typescript + MongoDB (using MongoDB client, not the Mongoose package).
  - APIs we will need for the front end.
    - Login API (no register API needed for this test project).
    - Accept an "email" and "password" and login user if found in DB.
    - Products APIs
      - List (to get all products)
      - Create (add a new product)
      - Edit  (edit a product)
      - Delete  (delete a product)
      - View   (view a product)
