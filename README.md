# NYTReactSearch
# This is a simple full stack React application
# Main functionality is to search articles from a given site (NYT)
# Display the search results of articles of a given string/subject.
# Displays title of the article.
# Detailed articles can be read by clicking the title.
# Each of the articles can be saved by clicking the save button
# All saved articles will be saved in Mogo DB
# Each of the saved article can be deleted by clicking the delete button
# This app has the following file structure
**********************************************************************************************************
The NYTReactSearch app has the following File structure
Root(NYTReactSearch)
    |
    client
        |
        components
            |
            Query.js
            Results.js
            Results.css
            Saved.js
            Saved.css
            Search.js
            Search.css
        utils
            |
            api.js
        controllers
            |
            articlecontroller.js
        models
            |
            Article
        node_module
        public
            |
            assets
                |
                css
                images
            bundle.js
            index.html
        gitignore
        package-lock.json
        package.json
        README.md
        yarn.lock
***************************************************************************************************************
Dependencies
express, body-parser,morgan,mongoose
***************************************************************************************************************
To run you have to Yarn Install, followed by Yarn Start. Application page will be opened on a browser
Following are a few screenshots
Landing page. Search result grid contains no data. Saved article grid shows previously saved articles.
![](https://github.com/JPillai2018/NYTReactSearch/blob/master/public/assets/images/Capture1.PNG)
Enter a search string and submit
![](https://github.com/JPillai2018/NYTReactSearch/blob/master/public/assets/images/Capture2.PNG)
Result of searched articles populated in Result grid
![](https://github.com/JPillai2018/NYTReactSearch/blob/master/public/assets/images/Capture3.PNG)
Save articles by clicking the save button. Saved article disappears from result grisd and shows up in saved article grid.
![](https://github.com/JPillai2018/NYTReactSearch/blob/master/public/assets/images/Capture4.PNG)
Saved articles can be removed by clicking remove button
![](https://github.com/JPillai2018/NYTReactSearch/blob/master/public/assets/images/Capture5.PNG)
****************************************************************************************************************