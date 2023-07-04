

export async function login (user, pass) {
  const uri = `/api/auth/signin`
  const url = process.env.REACT_APP_SERVER_ROOT + uri
  const reqBody = {
    username: user,
    password: pass
  }
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //credentials: 'include',
    body: JSON.stringify(reqBody)
  })
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      return data
    })
    .catch(e => {
      console.log(e)
      return e
    })
}