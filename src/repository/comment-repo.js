import Comment from '../models/comment.js'
import crudRepository from './crud-repository'

class commentRepository extends crudRepository{
    constructor(){
        super(Comment);
    }
}
export default commentRepository;