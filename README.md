# Golobe Travel Agency Website

![Home Screen Golobe Travel Agency](/preview.jpg)

## Overview

Welcome to the repository for Golobe Travel Service’s website, your go-to platform for exploring and booking your next travel adventure. This intuitive web interface allows users to search for flights and accommodations effortlessly.

A full-stack nextjs project to practice and showcase the work. The UI design was taken from [Figma community](https://www.figma.com/community/file/1182308758714734501/golobe-travel-agency-website).

Here is the live preview of this website [golob-travel-agency.vercel.app](https://golob-travel-agency.vercel.app)

## Note

- This website is not a real travel agency website. This was only for practicing web development. Not all the data shown here is real. This website used [fakerjs](https://fakerjs.dev/) to generate fake data.
- **Never provide your real card data here**. This website can collect information from some places (e.g.: subscription, signup, payment method adding, profile photo and cover photo uploading, etc.). So it is recommended that you don't provide your real information there. This website does not verify email during sign-up. So you can sign up using a fake email. However, if you sign in with Google, Facebook, or Apple, it can collect your real information. So do it with caution. Use fake data instead. This data will only be saved in the database, and nothing will be done with it. You can still test buying tickets for flights and book flight functionalities with fake data.

## Technologies used in this project

<img src="https://nextjs.org/favicon.ico" width="16" height="16"> Next js v14

<img src="https://www.mongodb.com/assets/images/global/favicon.ico" width="16" height="16"> MongoDB

<img src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3" width="16" height="16"> Tailwind CSS

<img src="https://redux.js.org/img/favicon/favicon.ico" width="16" height="16"> Redux

<img src="https://authjs.dev/favicon-32x32.png" width="16" height="16"> Next Auth v5

<img src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_96dp.png" width="16" height="16"> Firebase Cloud Storage

## Features

1. Fully Responsive
2. Used redux for state management
3. Used tailwind for styling
4. Flight and Hotel search (dummy data)
5. Filter Flight and Hotel
6. Show flight and hotel details
7. Buy a ticket or book a hotel
8. Get a ticket after buying
9. Sorting search results by best, shortest, and cheapest
10. Add to favorite
11. Login and Signup

## Limitations

- The website is not a real travel agency website. This was only for practicing web development.
- The data shown here is not real data.
- This website is hosted on Vercel with the hobby plan and the hosting location is Europe. The timeout of tasks in the hobby plan is 10 seconds. So sometimes users with a slow connection or locations far from Europe may be unable to change their profile picture, cover photo, etc. because of exceeding the task time limit on Vercel.


## Work locally

1. Download or clone the repository
2. Install dependencies by running `npm install`
3. setup `.env` file
4. run `npm run dev` to start the server

### .env file keys setup

App may get runtime errors if .env file is not setup.

```bash
# env file keys

BASE_URL=http://localhost:3000 # production URL in the production

MONGODB_URI= # mongodb URL to connect to the database

AUTH_SECRET= # random string minimum 32 bytes required for next auth

AUTH_GOOGLE_ID= # Google client ID for login with google
AUTH_GOOGLE_SECRET= # Google client secret for login with google
AUTH_FACEBOOK_ID= # Facebook client ID for login with Facebook
AUTH_FACEBOOK_SECRET= # Facebook client secret for login with Facebook
AUTH_APPLE_ID= # apple client ID for login with apple
AUTH_APPLE_SECRET= # apple client secret for login with apple

REVALIDATION_TIME= 600 # revalidation time in seconds, this specifies how often the data retrived from the database should be revalidated

# create a Firebase project and create a web app to get these Firebase configuration keys
FIREBASE_API_KEY= # firebase API key
FIREBASE_AUTH_DOMAIN= # firebase auth domain
FIREBASE_PROJECT_ID= # firebase project id
FIREBASE_STORAGE_BUCKET= # firebase storage bucket
FIREBASE_MESSAGING_SENDER_ID= # firebase messaging sender id
FIREBASE_APP_ID= # firebase app id
FIREBASE_MEASUREMENT_ID= # firebase measurement id

# register a user in Firebase authentication with email and password and place those email and password below
FIREBASE_AUTH_EMAIL= # firebase auth email
FIREBASE_AUTH_PASSWORD= # firebase auth password
```
### Generate Fake Flight Data for Database

After cloning the project, from the root directory `/golob-travel-agency-nextjs` run:

```bash
cd lib/db
node generateFakeFlightData.mjs
```
It will generate a file called `flights.json` in a directory from where you called the commander. If you called the the command from  `./golob-travel-agency-nextjs/lib/db`, `flights.json` file will be generated on that directory.

Upload this json file in the database in the collection named "flights".

## TODO

This project is still in development. Many functionalities have not been implemented yet. Here are some functionalities that are yet to develop:

- Implementing hotel data (fake) in the database.
- Showing hotel data in search results.
- Search filter working properly.
- Buying tickets and Booking hotel functionality (demo).
- Adding a forget password form to recover the password.
- Add payment method form and make it functional.
- Adding functionality of changing password, phone number, address, and date of birth from profile
- Showing histories (i.e. Hotel book, Ticket buy) and added payment methods.
- Adding hotel card to the "/favorites" page
- Download ticket functionality
- Let users know via email that they have successfully bought a ticket or booked a hotel.
- Adding Dark mode.
- And some more small functionalities
