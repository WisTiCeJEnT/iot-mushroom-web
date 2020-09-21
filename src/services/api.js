import axios from "axios";
const url = "https://mushroom-iot.herokuapp.com/api";
export const signIn = (payload, callback, onRejected) =>
  axios
    .post(url + "/login", payload)
    .then(({ data }) => callback({ data }))
    .catch(({ response }) => onRejected(response));
