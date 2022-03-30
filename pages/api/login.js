import axios from "axios";

export default function handler(request, response) {
  if (request.method === 'POST') {
    let username = request.body.username;
    let password = request.body.password;

    axios.post('http://localhost:8080/api/user/login', {
      username: username,
      password: password
    })
    .then(function (res) {
      response.status(200).send(res.data);
    })
    .catch(function (err) {
      console.log(err.response.data.message);
      response.status(err.response.status).send(JSON.stringify(err.response.data.message));
    });

  } else {
    response.status(404).json({ message: 'Unavailable' });
  }
}