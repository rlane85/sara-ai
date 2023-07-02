export async function login (user, pass) {
  const uri = `/api/auth/signin`
  const url = process.env.REACT_APP_SERVER_ROOT + uri
  const reqBody = {
    username: user,
    password: pass
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
    .catch(e => {
      console.log(e)
      return e
    })
}
