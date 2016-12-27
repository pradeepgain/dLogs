var websocket;
var messages = document.getElementById('docker-logs');
debugger;
websocket = new WebSocket('ws://13.93.148.138:4243/containers/188e2317e233/attach/ws?logs=0&stream=1&stdin=1&stdout=1&stderr=1');
websocket.onopen = function(e) {
    messages.innerHTML += "<p>Connected</p>";
}
debugger;
websocket.onmessage = function(e) {
    messages.innerHTML += "<p>" + e.data + "</p>";

    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
}
websocket.onerror = function(e) {
    messages.innerHTML += "<p>WebSocket onerror</p>";
}
websocket.onclose = function(e) {
    messages.innerHTML += "<p>WebSocket onclose</p>";
}