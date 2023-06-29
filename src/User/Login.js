import React, { useState } from 'react'

//material components
import { InputBase, IconButton, Paper, Divider } from '@mui/material'

import SendIcon from '@mui/icons-material/Send'

export const Login = () => {
  const submit = () => {
    const uri = `/api/auth/signin`
    const url = process.env.REACT_APP_SERVER_ROOT + uri
    const reqBody = {
      username: userText,
      password: passText
    }
    console.log(url)
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then(response => response.text())
      .then(data => {
        console.log(data)
      })
      .catch(e => console.log(e))
      .finally(x => console.log(x))
  }

  const [userText, setUserText] = useState('')
  const [passText, setPassText] = useState('')
  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        onKeyPress={e => {
          if (e.key === 'Enter') {
            submit()
            //sendTextMessage(textMessage);
            //setTextMessage("");
            e.preventDefault()
          }
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder='Username'
        inputProps={{ 'aria-label': 'user name' }}
        onChange={e => {
          setUserText(e.target.value)
        }}
        value={userText}
      />
      <InputBase
        onKeyPress={e => {
          if (e.key === 'Enter') {
            submit()
            //sendTextMessage(textMessage);
            //setTextMessage("");
            e.preventDefault()
          }
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder='password'
        inputProps={{ 'aria-label': 'pass word' }}
        onChange={e => {
          setPassText(e.target.value)
        }}
        value={passText}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton
        color='primary'
        sx={{ p: '10px' }}
        aria-label='send message to sara'
        onClick={() => {
          submit()
        }}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  )
}
