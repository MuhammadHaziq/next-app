
// import { Request, Response, NextFunction } from 'express'; // Import types for req, res, and next
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const route = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use((req: Request, res: Response, next: NextFunction) => {
//     console.log("Request Received")
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
// })
// server.use(route);

// server.listen(3001, () => {
//     console.log('JSON Server is running')
// })