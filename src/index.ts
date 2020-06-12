import fastify from 'fastify'
import routes from "./routes"

const server = fastify()


server.register(require('fastify-mongoose'), {
  uri: 'mongodb+srv://admin:zJhc4HLVD@cluster0-wk20w.mongodb.net/test?retryWrites=true&w=majority'
})


routes.forEach(route => {
	server.route(route);
});

server.get('/ping', async (request, reply) => {
 return 'pong\n'
})

server.listen(8080, (err, address) => {
 if(err) {
   console.error(err)
   process.exit(1)
 }
 console.log(`Server listening at ${address}`)
})