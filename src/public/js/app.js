const socket = new WebSocket(`ws://${window.location.host}`); // backend와 연결

// connection이 open일 경우
socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

// 메세지를 받았을 경우
socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

// 서버가 오프라인이 됐을 경우
socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);

// alert("hi");
