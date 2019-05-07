export default function(req, res) {
  console.log('the session id is', req.sessionID)
  res.status(200).send({msg: `This is the homepage`})
}