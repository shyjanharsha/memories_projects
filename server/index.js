// This file is going to be starting point of our applications
// { npm init -y } This comment is creat a new empty package.json file Backend
// { npm install body-parser cors express mongoose nodemon } This command will install all necessary dependencies for backend
// { npm install axios moment react-file-base64 redux redux-thunk } React Dependensies Redux-thunk is used for asyncronus actions

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
// In every express Applications first initialize app

const app = express() // app varible is equal to express function   
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())
app.use('/posts', postRoutes)

// const CONNECTION_URL = "mongodb+srv://javaScript-shyjan_22:javaScript-shyjan_22@cluster0.8fybz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
// Create a routes Folder and setup
//next going to do Folder Structure for backend

//{npm install bcryptjs jsonwebtoken}