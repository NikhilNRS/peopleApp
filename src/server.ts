import { Request, Response, NextFunction} from "express";
import helmet from "helmet";
import routes = require("./routes");
import { logger } from "./logger";
const bunyanMiddleware = require('bunyan-middleware');


const express = require("express");


const app = express();
app.get(
    "/", 
    (req: any, res: any) => (
    res.send("Pong")
));

// POST method route
// app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })


// app.use(bunyanMiddleware(
//     { headerName: 'X-Request-Id',
//         propertyName: 'reqId',
//         logName: 'req_id',
//         obscureHeaders: [],
//         logger,
//         additionalRequestFinishData(req: any, res: any) {
//             return { example: true }
//         }
//     }
// ));
// app.use(helmet());
// app.use(express.json());

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     logger.error(err);
//     res.status(501).json({"err": "internal server error"})
// })

app.use(express.json())

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
app.use("/", routes);
