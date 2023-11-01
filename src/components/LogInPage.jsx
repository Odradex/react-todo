import React, { useRef, useState } from "react"
import { Link, useNavigation, Form, useFetcher } from "react-router-dom"
import { FormControl, Alert, FormLabel, Button, Input } from "@mui/joy"

export async function action(e) {
  console.log(e)
  return 0
}

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigation()
  const fetcher = useFetcher()

  

  return (
    <>
      <h2 className="text-center mb-4">Log In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <fetcher.Form method="post">
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" required />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" required />
        </FormControl>
        <Button disabled={loading} type="submit">
          Log In
        </Button>
      </fetcher.Form>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}