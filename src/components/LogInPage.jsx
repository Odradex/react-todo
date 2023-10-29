import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function handleOnLogin(event) {
  alert(event.currentTarget)
}

export default function Login() {
  return (
    <CssVarsProvider>
      <div>
        <Typography level="h4" component="h1">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body-sm">Sign in to continue.</Typography>
      </div>
      <form onSubmit={(e) => handleOnLogin(e)}>
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
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>

        <Button type='submit' onClick={() => handleOnLogin()} sx={{ mt: 1 /* margin top */ }}>Log in</Button>
      </form>
      
      <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        sx={{ alignSelf: 'center' }}
      >
        Don&apos;t have an account?
      </Typography>
    </CssVarsProvider>
  );
}