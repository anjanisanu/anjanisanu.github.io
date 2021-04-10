const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello from Mithilakshar');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}`);
});
