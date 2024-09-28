import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { CircleController } from './controllers/CircleController.js';
import { RectangleController } from './controllers/RectangleController.js';
import { EquilateralTriangleController } from './controllers/EquilateralTriangleController.js';
import { SquareController } from './controllers/SquareController.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;

const circleController = new CircleController();
const rectangleController = new RectangleController();
const equilateralTriangleController = new EquilateralTriangleController();
const squareController = new SquareController();

// Middlaewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Роуты
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html')); 
});

app.post('/calculate/circle', (req, res) => circleController.calculate(req, res));
app.post('/calculate/rectangle', (req, res) => rectangleController.calculate(req, res));
app.post('/calculate/equilateralTriangle', (req, res) => equilateralTriangleController.calculate(req, res));
app.post('/calculate/square', (req, res) => squareController.calculate(req, res));

// Обработка запросов на шаблоны
app.get('/templates/:name', (req, res) => {
    const templateName = req.params.name;
    res.sendFile(path.join(__dirname, '../../public/templates', `${templateName}`), {
        headers: {
            'Content-Type': 'text/plain', 
        }
    });
});

app.listen(port, () => console.log(`Сервер запущен по адресу http://localhost:3000`));