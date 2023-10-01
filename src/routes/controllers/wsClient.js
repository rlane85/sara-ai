export function wsClient() {
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_WSS_ROOT + "?token=" + token;
  const client = new WebSocket(url);
  return client;
};
