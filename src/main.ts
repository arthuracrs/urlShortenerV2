import { server } from '@src/server'

console.clear()

const port = 3000

server.listen(port, () => {
  console.log(`running on port ${port}`)
})
