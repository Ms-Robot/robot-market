import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.listen(3000, () => console.log('Server running on 3000!'));

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const robots: any[] = [{
  name: 'Mischa',
  type: 'Helper',
  nature: 'good',
  numberOfParts: 42
}, {
  name: 'Glutton',
  type: 'Feeder',
  nature: 'bad',
  numberOfParts: 9999999999999999999
}, {
  name: 'Serce',
  type: 'Motivator',
  nature: 'good',
  numberOfParts: 1
}];

app.get('/robots', cors(corsOptions), function (req, res) {
  res.send(robots);
});
