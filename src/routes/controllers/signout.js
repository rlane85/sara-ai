export async function signout(user, pass) {
  const uri = `/api/auth/signout`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const url = serverRoot + uri;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
