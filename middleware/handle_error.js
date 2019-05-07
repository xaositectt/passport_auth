export default function handleError(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  console.log(err)

  res.json({
      status: `error ${err.status}`,
  })
}
  