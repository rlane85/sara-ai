export async function listToDos() {
  const uri = `/api/todo`;
  const url = process.env.REACT_APP_SERVER_ROOT + uri;
  return fetch(url, { 
    credentials: "include",
   })
}
