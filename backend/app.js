import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}`);
});
