# Prepare For Your Interview 
- This is a forum for people who are preparing for their interviews, everyone are allowed to posts their own thoughts and experiences.
- Web Link: https://prepare-for-your-interview.herokuapp.com/
- Slide: https://docs.google.com/presentation/d/1qxfWkA0m3QB9q077mPNBzzeC8w5SQYFJ8WubE4fXj2Y/edit?usp=sharing
- Video: https://www.youtube.com/watch?v=IemvEjDfmQg

# Features:
- Users login/logout/signup --- Yuanyuan (Including: db folder-myDB; public folder-index.html, register.html, regi.js, style.css; routes folder-index, users)
- Posts create and view (still in process) -- Zhenghao

# Useful Information about This Project:
- This is a class project of CS5610: Web Development at Northeastern University with Professor John Alexis Guerra Gómez.
- Class Link: https://johnguerra.co/classes/webDevelopment_fall_2021/

# Tech Stacks:
- Front-end: Bootstrap, HTML, CSS, Javascript
- Back-end: Express, node.js, ESlint
- Database: MongoDB
- Deploy by using Heroku

# How this Website Looks Like:
### 1. Login Page:
<img width="952" alt="img1" src="https://user-images.githubusercontent.com/77944820/139608734-64ae2ebe-7dc6-4086-86f2-e4d0a8f7edf5.PNG">
If one of password or username is empty, it will remind user that please enter both of them. When user input his/her username and password, this app will search in the database and findout whether this user is exists. After login, there will pop out a window tells users that they are login successfully and turn to the home page.

---

### 2. Signup Page:
<img width="447" alt="img2" src="https://user-images.githubusercontent.com/77944820/139608758-c56a679f-7da6-43d6-819f-950a792cedd2.PNG">
If the username is already taken, there will appear a red bar remind users that the username is already exist. When users signup successfully, there will pop out a window remind user that he/she is registed successfully and turn to login page.

---

### 3. Logout button:
<img width="67" alt="img3" src="https://user-images.githubusercontent.com/77944820/139608766-efb643b0-bffa-4e5e-87ba-8133d0f3196f.PNG">
In both of create and view posts page, there will be a logout button, which enables users to logout at anytime they want. After logout, it will turn to login page.

---

### 4. Create Posts:
<img width="959" alt="Capture" src="https://user-images.githubusercontent.com/77944820/139608776-d0215b9e-fefb-49d0-ace6-3634f22a7e7e.PNG">
Users will be able to share their thoughts on this page. After entering title and content, when user click "create", they will receive a message appreciate for what they share and turn to view posts page.

