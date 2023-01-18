import axios from "axios";

const breakingBadApi = axios.create({
  baseURL: "https://api.breakingbadquotes.xyz",
});

export default breakingBadApi;
