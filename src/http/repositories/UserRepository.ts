const db = this.mongo.db
export class UserRepository {
    profile(){
        db.collection('users', this.onCollection);
        // return 'profile';
    }
    
    onCollection (err, col) {
        if (err) return reply.send(err)
    
        col.findOne({ id: 1 }, (err, user) => {
          reply.send(user)
        })
      }
    
}