const axios = require("axios");

const URL = "https://rickandmortyapi.com/api";

const successH = (response, res) => {
    const { id, name, gender, species, image } = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify ({ id, name, gender, species, image }));
};

const errorH = (error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
};

const getCharById = (res, id) => {
    axios
      .get(`${URL}/character/${id}`)
      .then((response) => successH(response, res))
      .catch((error) => errorH(error, res));
};

module.exports = getCharById;