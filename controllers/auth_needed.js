export default function(req, res) {
  console.log('Inside GET /authrequired callback')
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if(req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n')
  } else {
    console.log('you are unauthenticated!')
    setTimeout(() => {
      res.redirect('/')
    }, 5000)
  }
}