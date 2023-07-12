export async function listToDos() {
  const uri = `/api/todo`;
  const url = process.env.REACT_APP_SERVER_ROOT + uri;
  setTimeout(() => {
    return fetch(url, {
      credentials: "include",
    });
  }, 500);
}
