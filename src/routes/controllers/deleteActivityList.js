export async function deleteActivityList(user, pass) {
  const uri = `/api/activitylist`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const url = serverRoot + uri;

  return fetch(url, {
    method: "DELETE",
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
