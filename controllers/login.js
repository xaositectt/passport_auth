export default {
  get(req, res) {
    console.log('Inside GET /login callback function')
    console.log(req.sessionID)
    res.send(`You got the login page!\n`)
  },
  post(req, res) {
    console.log('Inside POST /login callback function')
    console.log(req.body)
    res.send(`You posted to the login page!\n`)
  }
}