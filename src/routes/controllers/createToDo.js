export async function createToDo(description, priority, duedate) {
  const uri = `/api/todo`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const url = serverRoot + uri;
  const reqBody = {
    description: description,
    priority: priority,
    duedate: duedate,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(reqBody),
  })
}
