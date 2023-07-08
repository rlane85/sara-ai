export async function login(user, pass) {
  const uri = `/api/auth/signin`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const url = serverRoot + uri;
  const reqBody = {
    username: user,
    password: pass,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(reqBody),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
}
