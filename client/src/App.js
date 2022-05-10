import React, {useState, useEffect} from 'react'
import {Container, AppBar,Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/memories.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './style'
import {useDispatch } from "react-redux"
// import { useEffect } from 'react'
import {getPost} from './actions/postsAction'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route,Router } from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
const App = () => {
    // const [currentId, setCurrentId] = useState(null)
    // const classes = useStyles()
    // const dispatch = useDispatch()

    // useEffect(() =>{
    //     dispatch(getPost())
    // }, [dispatch])
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/auth' exact element={<Auth />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App