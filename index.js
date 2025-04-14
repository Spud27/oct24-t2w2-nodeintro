const express = require('express') // CommonJS modules
const app = express()
const port = 3000

const person = {
    name: "Mike",
    age: 28
}

const posts = [
    {
        title: 'post 1',
        body: 'lorem ipsum',
        isPublished: false
    },
    {
        title: 'post 2',
        body: 'this is a second post',
        isPublished: true
    }
]

// Posts routes

// Get all posts
app.get('/posts', (req, res) => {
    res.send(posts)
})
// get one post
app.get('/posts/0', (req, res) => {
    res.send(posts(0))
})
// create a new post
// update post
// delete post

// Python/Flask
// @app.route('/') // default get
// def home():
//     return 'Hello world'

// app.[http-verb]([path], [callback])
// Callback accepts a request and response object
app.get('/', (req, res) => {
    // Serialize person and send to the client
    res.send(person)
})

// Start the dev serer on the given port
// the callback is called when the server is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
