import fastify from 'fastify'
import routes from "./routes"

const server = fastify()

routes.forEach(route => {
	server.route(route);
});

server.get('/ping', async (request, reply) => {
 return 'pong\n'
})

server.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  
  url: 'mongodb+srv://admin:zJhc4HLVD@cluster0-wk20w.mongodb.net/test?retryWrites=true&w=majority'
})

server.listen(8080, (err, address) => {
 if(err) {
   console.error(err)
   process.exit(1)
 }
 console.log(`Server listening at ${address}`)
})