import React, { useRef, useState } from 'react'
import {Button, FormControl, FormLabel, Input} from '@mui/joy'
import { useAuth } from '../contexts/ContextAuth'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  // Import the signup function we defined in AuthContext.js
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSumbit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value)     {
      return setError('Passwords do not match');
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError('Failed to create an account')
    }
      setLoading(false)
    }

  return (
    <>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      <form onSubmit={(e) => handleSumbit(e.currentTarget)}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRef}
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>

        <Button type='submit' sx={{ mt: 1 /* margin top */ }}>Log in</Button>
      </form>
    </>
  )
}