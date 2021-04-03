# angular-markdown

## About 

angular-markdown is a working example of an Angular App that can display content and posts dynamically through the use of multiple markdown files. The basic idea is that each post or page with content will have their own markdown file. The website iterates over each markdown post/page and displays a preview on the home page. When opened, the content of that `markdown` file will be opened on it's own page. 

In this example, there is a list of posts for different recipes. The home page will show a preview of all recipes, with a link that will open any given recipe on it's own page.

This can be used as a base for simple blog/post websites.

## To Run

* Run `npm install` in the root directory to add the necessary npm packages to the project.
* Once completed, run `ng serve`.
* Navigate to `localhost:4200` in a browser.

## To Build

* Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory. 
* Use `ng build --prod` for a production build.

## Resources

From [Creating a list of posts using Markdown on your Angular Website](https://vondreii.com/blog/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite).

<br>

![alt text](src/assets/images/preview.jpg)