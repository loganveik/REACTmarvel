import axios from "axios";

const BASEURL = "https://gateway.marvel.com/v1/public/characters?name=";
const APIKEY = "&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d";
const HASH = "&hash=25b9e11e593510855d8a6ef9ef4d9fb9"


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY + HASH);
  }
};

