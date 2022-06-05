const express = require('express')
const app = express()
var start = Date.now()

// /healthz 경로로 요청이 들어 왔을 때 처리
// 기동 후 40초까지는 응답코드 200을, 이후에는 응답코드 500을 반환
app.get('/healthz', function(request, response) {
    var msec = Date.now() - start
    var code = 200
    if (msec > 40000) {
        code = 500
    }
    console.log('GET /healthz ' + code)
    response.status(code).send('OK')
})

// /ready 경로로 요청이 들어 왔을 때 처리
// 기동 후 20초까지는 응답코드 500을, 이후에는 응답코드 200을 반환
app.get('/ready', function(request, response) {
    var msec = Date.now() - start
    var code = 500
    if (msec > 20000) {
        code = 200
    }
    console.log('GET /ready ' + code)
    response.status(code).send('OK')
})

// / 경로로 요청이 들어 왔을 때 처리
app.get('/', function(request, response) {
    console.log('GET /')
    response.send('Hello from Node.js')
})

// 서버 포트를 오픈
app.listen(3000);

