export async function roles() {
  const uri = `/api/roles`;
  const url = process.env.REACT_APP_SERVER_ROOT + uri;
  console.log(url);
  return fetch(url, { 
    credentials: "include",
    Accept: '*/*',
   })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
}
