# Motley Money Review

Welcome to the Motley Money Review! Where you can get up to date and relevant stock tips and invest like a pro.

## Running the App

- On your local machine, navigate to the root folder for the project /materials.
- Run the command `python minimal.py runserver` to get the server up and running.
- Navigate to https://motleymoneyreview.netlify.app/ to view the project deployed and hosted on Netlify 🥳

## Future Improvements

- Make it Mobile: I would have loved to get this page mobile ready in time for this "soft launch", but alas time did not allow. That would be one of the first improvements I would make because I know folks need financial tips on the go!
- Performance: I ran a quick Lighthouse test on this to get a performance baseline, and after a couple of adjustments for accessibility, I found the main area I had for improvement was SEO. I would go back and get that score up as well as reach for 100 with accessiblity, for which I would need to reach into the inner HTML from the API call.
- Improved Search Functionality: Currently, the search functionality only looks for tags associated with an article - and it only returns all articles once the search term is complete. I initially implemented a search that looked through the headlines and returned as the user typed, so this is a functionality I would like to add in the future. We could also allow searching by author, or a variety of other key words.
- Stocks Side Bar: Currenty, all the stocks go into a bucket at the initial API call. The first call on the article page grabs the first 3 stocks from that bucket, but they do not necessarily correspond to the article on the page. I chose this route because I noticed most articles only had one associated stock, and I thought it would be more beneficial to always show 3. In the future, I would like to make sure that the related stocks are always displayed first on page load.
- Note: In the mockup, there's a cost displayed for the stock, but I couldn't find this information anywhere in the API. If our API cannot return it, I would find another API to return that relevant price info for our users.
- Persistant Data on Article Page: Right now, data is being passed into the article page from the parent component. Because of this, when you refresh the article page, it goes blank. I would like to look into either using a store to hold onto the data or other methods to make it persist.
- Relevant Links on Article Page: Inspired by the mockup, I would add a list of relevant headlines related to the article on the page (we could use tags, company name, or collection.slug to search an external API to grab those). I would also want to include social links so that the article could be shared easily.
- Single Link on Article Card: Right now on each article card on the home page, I'm displaying the pitch which seemed to make the most sense. However, I don't love that there are links embedded in there - I think it could cause confusion for the user and ultimately get more people navigating away from our site. I would either remove the link or crop the text we want to feature on that card.

## Troubleshooting

I had a lot of fun working on this app, but (as with most coding projects), it did not come without it's struggles. Here are some of the issues I encountered and how I troubleshooted them.

- CORS Errors (cue dramatic music): When I first got the app up and running, I got non-stop CORS errors around 'Access-Control-Allow-Origin'. Initially I thought I just needed to pass that into the headers with "\*" to denote that everything should be allowed. A few versions of this didn't work. I went to Postman and slowly started taking away one header at a time, only to find that even without any headers I got full data back. I turned my computer off and on again. I tried different browsers. Incognito mode. Nothing seemed to work... Until I went and ate dinner. Upon returning I was seeing my data console logged and happy. I am still getting the same CORS errors in the console when I run the project locally, so I'm not sure if it's something locally with my machine.
- URL Route: I pulled the url route from "path" in the API, and while it looks great in the API, it converts "/" to "%2F" in the live URL. I worked on trying to convert these back to "/", using decodeURI() and a few other hackier methods I found, but nothing worked. Further googling told me this could be a Chrome issue (my browser of choice). I would write up a bug ticket to investigate this further so we could have a prettier URL.

## Testing

As I did not have enough time to write tests for this project, I'd like to "psuedo-code" some of what I would test.

- We expect a good API call successfully returns the data we expect. I would have a file with JSON data matching what we would expect, and run the test against that.
- We expect clicking on the title link to correctly route us to the article page.
- We expect a bad API call to return... something else. The site currently only has happy path routing, but we could add 404 pages and test to make sure those appear and help the user back to a happier page.
- We expect the articles to automatically be organized from most recent to least recent.
- Upon hitting "Sort By Oldest", we expect the articles to be organized from least recent to most recent.
- Upon searching for a tag, we expect only the articles with matching tags appear on the home page.
- We expect that when the search bar is empty, all articles will show.
- We expect 3 stocks to exist on the article page.
- We expect that when "Shuffle Stocks" is clicked, 3 new stocks will appear.
- We expect the back button to take the user back to the home page.
- We expect the site title to take the user back to the home page.

## Behind the Code: About the Creator

Hi! It's me, Caitlyn, the enthusiastic coder behind the project. I had a lot of fun building this app, and I think a big reason for that was I got to learn a new library. Although I have worked in React and Angular, I had never written a line of code in Vue before this project. While I had done some reading on the concepts and felt that there were a lot of similarities between React and Vue, in practice the syntax has a lot of little differences. I am definitely a developer that loves continuous learning, and it made me more excited to work full time with Vue.
When I'm not writing code, you can probably find me doing DIY projects on my old house, playing with my dog Ruby, or plotting out my next vacation (currently hoping to go to Portugal next spring).

## <img src="./docs/src/assets/thanks.png" alt="Tom Hanks says Thanks" width="400"/>

---

### Python API Setup

- Install python3 https://realpython.com/installing-python/
- Create a new virtual environment, activate it, and install project requirements

  `python3 -m venv intervue`

  `source intervue/bin/activate`

  `pip install -r requirements.txt`

- Run `python minimal.py runserver`
- Open `http://127.0.0.1:8000/content`, and observe a large blob of json data

### Vue Frontend Setup

- Install vue-cli as documented here https://cli.vuejs.org/guide/installation.html
- Run `npm install`
- Run `npm serve`, and observe the frontend running at `localhost:8080`

## Motley Fool Developer Interview Project

Hello!

Below you will find guidelines for a small website you will create. One API endpoint (`http://127.0.0.1:8000/content`) is provided, and will populate the website.
Also included are two wireframe designs for a homepage and an article page as well as a basic Vue templates for hooking up your Vue components.
Please feel free to use your own creativity for the design of this website.

We would like to thank you for taking the time to complete this project. We will schedule your in-person interview after we have received your completed project.
We are looking forward to discussing your experience and the completed project!

### General project guidelines

- Host your project on github.
- Your app should be a single page app built off our base Vue app.
- Use any publicly available VUE / NPM packages that you need.
- Feel free to use any CSS frameworks you are comfortable with.

### Homepage

- The top box on the homepage should be populated with the first article in the content API with the tag where slug=10-promise.
- List the remaining articles below this
- The headline's of each article should link to the article page.
- The content API supports primitive filtering by the article `tag_slug`: pass query parameter `tag=` to filter
  articles by tag. The homepage should allow users to filter by the available tags.
- Homepage should support sorting by article publish date

### Article Page

- Use the content provided by the API to populate article pages for each article
- Use a URL schema that makes sense to you.
- Create a button below the Stock Quotes sidebar that, when clicked, will use javascript to shuffle the order of the stock quote
  items.

### Evaluation criteria

List of possible evaluation criteria.

- Front-end structure - What you build vs pull in via libraries, CSS and JS / VUE component structure.
- VUE Framework usage.
- Possible areas for future additions, improvement, or optimization.
- Anything you did to make make the application your own.
