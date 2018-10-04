import React from "react";
// Import sub-components
import Search from "./components/Search";
import Saved from "./components/Saved";
// API Functions
import api from "./utils/api";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: [],
      resultToSave: {},
      saved: []
    };

    this.setTerm = this.setTerm.bind(this);
    this.setArticleToSave = this.setArticleToSave.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

    // The moment the page renders get saved articles
  componentDidMount() {
    // Get the latest history.
    api.getSaved().then(function(response) {
      console.log("Saved Articles=" + response);
      if (response !== this.state.saved) {
        console.log("Saved articles", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      // console.log("Search term updated.");
      // ABout to Run query!!!
      api.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log("Query Data=" + data[0].headline.main);
          this.setState({ results: data });
        }
      });
    }
  }

  //Setting the state
  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  // Saving state before saving the article
  setArticleToSave(index, article) {
    const newState = this.state.resultToSave;
    newState.title = article.title;
    newState.date = article.date;
    newState.url = article.url;
    console.log("Title=" + newState.title);
    console.log("Date=" + newState.date);
    console.log("URL=" + newState.url);
    this.setState({
      resultToSave: newState
    });
    console.log("Save Article Title=" + this.state.resultToSave.title);
    // Save selected article
    api.saveArticle(this.state.resultToSave.title, this.state.resultToSave.date, this.state.resultToSave.url).then((data) => {
      console.log("Save Article Data=" + data);
      Console.log("AAAAA");
      this.setState(previousState => ({
        saved: [...previousState.saved, this.state.resultToSave],
        results: [...previousState.results.slice(0, index), ...previousState.results.slice(index+1)]
      }));
    });
  }

  // Delete an article
  deleteArticle(articleID, index) {
    // console.log("About to delete....");
    console.log("Delete Article ID=" + articleID);
    Console.log("BBBBB");
    api.deleteArticle(articleID).then(() => {
      this.setState((prevState) => ({
        saved: [...prevState.saved.slice(0,index), ...prevState.saved.slice(index+1)]
      }));
    });
  }

  //Initial rendering- Always brings back any saved items
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Article Search</h1>
          <h3>From New York Times</h3>
        </div>
        <div className="row">
          <Search setTerm={this.setTerm} setArticleToSave={this.setArticleToSave} saved={this.state.saved} results={this.state.results} resultToSave={this.state.resultToSave} />
        </div>
        <div className="row">
          <Saved saved={this.state.saved} deleteArticle={this.deleteArticle} />
        </div>
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;