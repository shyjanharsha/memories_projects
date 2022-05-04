import React from 'react'
import {useSelector} from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/Post'
import useStyles from './styles'
const Posts = ({setCurrentId}) => {
    const postSelector = useSelector((state) => state.postReducers ) 
    const classes = useStyles()
    console.log(postSelector, "postSelector")
    console.log(classes, "classes")

    return(
        !postSelector.length ? <CircularProgress /> : (
            <Grid  className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    postSelector.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>

        )
    )
}

export default Posts