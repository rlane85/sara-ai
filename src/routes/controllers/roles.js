export async function roles() {
  const uri = `/api/roles`;
  const url = process.env.REACT_APP_SERVER_ROOT + uri;
  return fetch(url, { 
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
