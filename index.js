const express = require('express') // CommonJS modules
const app = express()
const port = 3000


// Python/Flask
// @app.route('/') // default get
// def home():
//     return 'Hello world'

// app.[http-verb]([path], [callback])
// Callback accepts a request and response object
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the dev serer on the given port
// the callback is called when the server is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
