<<<<<<< HEAD
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const apiRouter = require('./routes/api');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',apiRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => console.log(`server listening on port ${PORT}`));
=======
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const apiRouter = require('./routes/api');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',apiRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => console.log(`server listening on port ${PORT}`));
>>>>>>> origin/master
