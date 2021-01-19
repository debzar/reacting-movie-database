import Config from '../utils/config';

class MovieService {
	constructor() {
    	this.config = new Config();
  	}


  	async getPopular() {
  		return fetch(`${this.config.BASE_URL}/popular${this.config.API_KEY}`)
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      }).then(json => {
        console.log("Retrieved items:");
        console.log(json);
        //const items = [];
//        const itemArray = json._embedded.collectionItems;
//        for(var i = 0; i < itemArray.length; i++) {
//          itemArray[i]["link"] =  itemArray[i]._links.self.href;
//          items.push(itemArray[i]);
//        }
		return json;
      }).catch(error => {
      	this.handleError(error);
      });
  	}
}

export default MovieService