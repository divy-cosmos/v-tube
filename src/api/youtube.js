import Axios from "axios";

const KEY = 'AIzaSyDQ6Aiz7FZMWlK7QloeKhxoXqEibSpqnCg';
export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "vedio",
    maxResults: 5,
    key: KEY
  }
});
