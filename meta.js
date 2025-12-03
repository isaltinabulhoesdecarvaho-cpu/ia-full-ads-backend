
import axios from "axios";

export const META_OAUTH_URL = "https://www.facebook.com/v19.0/dialog/oauth";
export const META_TOKEN_URL = "https://graph.facebook.com/v19.0/oauth/access_token";

export const META_API = axios.create({
  baseURL: "https://graph.facebook.com/v19.0",
  timeout: 10000
});
