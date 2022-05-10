import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import Icon from './Icon'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}
const Auth = () => {
  const state = null
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const history = useNavigate()

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => (
      !prevShowPassword
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData, "formData")

  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false)
  }

  const googleSuccess = async (res) => {
    console.log(res, "Google give a response")
    const result = res?.profileObj
    const token = res.tokenId

    try {
      dispatch({ type: "AUTH", data: { result, token } })
      history('/')
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log(error, "Google sign in error")
    console.log("Goole Sign in was unsuccessfull, Try again later")
  }
  return (
    <Container component="main" maxWidth="xs" >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <Input name='email' label="Email Address" handleChange={handleChange} type='email' />
            <Input name='password' label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId='46552463892-bl6vmg7iguh317e9a962o7t55t50g17e.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? "Already have an account? Sign In" : "Don't Have a account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth