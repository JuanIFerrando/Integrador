const axios = require("axios");

const URL = "https://rickandmortyapi.com/api";

const successH = (response, res) => {
    const { name, gender, species, origin, status, image } = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify ({ name, gender, species, origin, status, image }));
};

const errorH = (error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
};

const getCharDetail = (res, id) => {
    axios
      .get(`${URL}/character/${id}`)
      .then((response) => successH(response, res))
      .catch((error) => errorH(error, res));
};





module.exports = getCharDetail;