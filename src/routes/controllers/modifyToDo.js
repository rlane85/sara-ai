export async function modifyToDo(description, priority, duedate, status) {
//   console.log(description);
//   console.log(priority)
//   console.log("anything")
  const uri = `/api/todo?`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const url =
    serverRoot +
    uri +
    new URLSearchParams({ description: description, priority: priority }).toString();

  return fetch(url, {
    method: "PUT",
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
