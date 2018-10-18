import * as express from 'express';
import * as cors from 'cors';
import { Application } from 'express';

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

class App {
  // private loggerFactory: LoggerFactory = new LoggerFactory(Config.settings.winston, Config.settings.morgan);
  // private logger: LoggerInstance       = this.loggerFactory.get('App');
  // private debug: IDebugger             = debug('app:main');

  public async run(): Promise<void> {
    // this.debug('starting express app');
    const app: Application = express();
    const corsOptions = {
      origin: 'http://localhost:4200',
      optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));

    // const apiPath                                              = Config.settings.apiPath;
    // const routingControllersOptions: RoutingControllersOptions = {
    //   defaultErrorHandler: false,
    //   routePrefix:         apiPath,
    //   controllers:         [`${__dirname}${apiPath}/*.ts`]
    // };

    // this.debug('routing: %o', routingControllersOptions);
    // useExpressServer(app, routingControllersOptions);

    // this.debug('listen');
    app.get('/robots', cors(corsOptions), function (req, res) {
      res.send(robots);
    });
    app.listen(3000, () => console.log('Server running on 3000!'));

    // app.listen(Config.settings.port as number, Config.settings.host);
    // this.logger.info(`Visit API at ${Config.settings.host}:${Config.settings.port}${apiPath}`);
    //
    // process.on('unhandledRejection', (error: Error, promise: Promise<any>) => {
    //   this.logger.error('Unhandled rejection', error.stack);
    // });
  }

}

new App().run().catch((error: Error) => {
  console.error('[!!!]', error.stack);
  process.exit(1);
});
