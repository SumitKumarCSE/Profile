# Profile
This is front-end of a profile page using ReactJS. 

- Consists of three components Navbar, Content (UserInfo), and Posts.
- It is responsive according to different screen sizes. I use media screen property for making it responsive according to different screen sizes.
- Navbar and Content are having display as flex and Posts as grid display.
- Inside Content there is a js function which will return values in million or billion if the values are large.
- Posts consists of a text-overflow property because we have to show limited content on the front page.
- I also make use of FontAwesomeIcon for representing different icons in React such as Star, ThumbsUp, Heart, Eye, Tick, and Diamond.
- Use map for rendering all the posts which are inside data.js file.
- For deployment use github pages by adding homepage, predeploy and deploy properties.

# Steps to Run
1. Clone the repo: `git clone https://github.com/SumitKumarCSE/Profile.git`
2. Install the dependencies: `npm i`
3. Start React app: `npm start`
