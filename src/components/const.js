// export const API_PATH = "http://43.202.168.206/"
// export const API_PATH = "http://43.202.168.206:8008/"
export const API_PATH = process.env.REACT_APP_API_URL
// export const API_PATH = "https://api.cradle-vision.com/"
export const CONFIG = {headers: {"Authorization": "Bearer " + localStorage.getItem('token')}}
const apiUrl = process.env.REACT_APP_API_URL;
const environment = process.env.REACT_APP_ENV;
