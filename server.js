const express = require('express');
const app = express();
const port = process.env.PORT || 8082;

app.use('/', express.static('dist/ragazza'));

app.listen(port, () => {
  console.log('El servicio Frontend esta escuchando, por el puerto: ', port);
});
