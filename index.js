const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter=require('./routers/authRouter')

mongoose     //promise, so we write then,catch
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Database connected');
	})
	.catch((err) => {
		console.log(err);
	});

app.use('/api/auth', authRouter) //if a route has /api/auth then go to that authRouter file and handle the request

app.get('/',(req,res)=>{
    res.json({message:"Hellow to the server"})
})
app.listen(process.env.PORT, () => {
	console.log('listening...');
});