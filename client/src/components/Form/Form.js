import React, { useState , useEffect} from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux' //using to dispatch a action
import {createPost, updatePost} from "../../actions/postsAction"
const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })
    const postSelector = useSelector((state) => currentId ? state.postReducers.find((p) => p._id == currentId) : null ) //find method returns one singular thing
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        if(postSelector) setPostData(postSelector)
    }, [postSelector]) //useEffects accepts two arguments 1st one callback function 2nd one is dependensis array
    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId,postData))
        }else{

            dispatch(createPost(postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: ""
        })
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography>
                {/* <TextField /> These type of text field is self closing tag */}
                <TextField
                    name="Creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="Title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="Message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="Tag"
                    variant="outlined"
                    label="Tag"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} varient="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button varient="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;