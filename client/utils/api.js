// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
// NYT API
const authKey = "5c4953b3d9a64372a9b2d64f55d8d089";
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const authKey = "b9f91d369ff59547cd47b931d8cbc56b";
// Helper Functions
const api = {
  runQuery: (searchTerm) => {
    console.log("We have a search term passed into query: " + searchTerm);
    // NYTimes search query.
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;
    return axios.get(queryURL).then((response) => {
      console.log("API Search Result= " + response);
      if(response.data.response.docs[0]) {
      	return response.data.response.docs;
      } else {
      	return "";
      }
    });
  },

  // Hit server to get saved articles. 
  // Get all the items  saved in the database
  getSaved: () => {
  	return axios.get("/api/saved");
  },

  //Saving the selected articles to the database.
  saveArticle: (articleTitle, articleDate, articleURL) => {
  	// console.log("Article title = " + articleTitle);
  	// console.log("Article Date = "  + articleDate);
  	return axios.post("/api/saved",
  		{
  			title: articleTitle,
  			date: articleDate,
        url: articleURL
  		}
  	);
  },

  // Delete one article at a time using the id
  deleteArticle: (articleID) => {
  	console.log("We have an article to delete in helper: " + articleID);
  	return axios.delete("/api/saved/" + articleID)
  	.then(res =>  {
  		console.log("Delete response from axios: " + res);
  	})
  	.catch(err => {
  		console.log("Error pushing to delete: " + err);
  	});
  }
};
// Export the helpers function.
export default api;
