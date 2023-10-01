export async function modifyToDo(modifyType, description, value) {
  const uri = `/api/todo?`;
  const serverRoot = process.env.REACT_APP_SERVER_ROOT;
  const newValues = new URLSearchParams({ description, ...value });
  const url = serverRoot + uri + newValues.toString();

  return fetch(url, {
    method: modifyType,
    credentials: "include",
  });
}
