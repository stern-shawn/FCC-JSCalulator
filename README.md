# Javascript Calculator App - FreeCodeCamp Project
---
## 1. What This Project Does
This is a HTML/CSS/jQuery implementation of a basic calculator. The user inputs an expression comprised of values and operators and can evaluate the result.

The user stories for this project are:

* User can add, subtract, multiply and divide two numbers.
* User can clear the input field with a clear button.
* User can keep chaining mathematical operations together until they hit the equal button, and the calculator will tell them the correct output.
* Use any libraries or APIs needed, and give it your own personal style.

Since this is my own personal project with some rather loose guidelines, it has this functionality in addition to the expected user stories:

* Includes a help section which clarifies the use of the AC, CE, and Ans buttons

The originally submitted version of the app fulfilled all user stories, and the various iterations since then have been improvements either in styling or in making the code more succinct.

## 2. How To Set This Up
If you want to clone this project for yourself, the process is very simple due to the structure of the project.

1. Either manually download and unzip files to a location, or clone this repo through Git.
2. Open the index.html file in your browser. This project is built on HTML5/CSS3/JavaScript/jQuery and the necessary resources from Bootstrap and FontAwesome are linked through the HTML file, so there is no need to install any packages through NPM.

## 3. Project Goals
As one of my early web development projects, this was a chance for me to:

* Continue working with HTML/CSS for styling and creating a crisp, visually appealing user experience.
* Practice using jQuery to monitor divs and buttons for clicks and apply appropriate responses to the DOM.
* Practice application flow and control logic in JavaScript/jQuery to make a calculator that operates as expected.
* Look for opportunities to use special JavaScript functions like .map, .every, etc to make code more pure and declarative vs imperative.
* Continue producing well-documented code with repetitive functionality factored out into specific functions that minimize redundancy, keep code short, and increase readability/maintainability.

Now that I'm coming back and reviewing past projects (such as this one), my new goals in addition to supporting the previous ones are:

* Redesign the app to fit into my growing design language/styling through color, layout, animations, and reduction of unnecessary elements
* Refactor any redundancies in my JavaScript and make old code compliant with current linters (such as AirBnB's standards)

## 4. Link to Live Site
The latest version of the site can be viewed [here](https://stern-shawn.github.io/FCC-JSCalulator/) thanks to gh-pages hosting.

## 5. Roadmap
TODO:

* ~~Determine necessary global variables to hole calculator state~~
* ~~Implement if/else logic to check for numeric input, operator inputs, and the other special functions like AC, CE, Ans~~
* ~~Implement numeric input~~
* ~~Implement behavior of equals button~~
* ~~Implement behavior of AC, CE~~
* ~~Implement behavior of Ans and revisit interaction with equals button~~
* ~~Implement better logic for calculator operation to match windows calculator~~
* ~~Fix CE not working after hitting "=" (turns out eval was reducing the expression to a number, and .slice() only works on strings! .toString() to the rescue)~~
* Restyle app
* Add animations?
