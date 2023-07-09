export async function modifyToDo(
  modifyType,
  description,
  value
) {
  const uri = `/api/todo?`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const url =
    serverRoot +
    uri +
    new URLSearchParams({
      description: description,
      value
    }).toString();

  return fetch(url, {
    method: modifyType,
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
