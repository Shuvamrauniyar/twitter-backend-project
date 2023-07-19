class crudRepository{
    constructor(model){
        this.model = model
    }
    async create(data){
        try {
            console.log(data);
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('something went wrong in crud repository')
            return error;
        }
    }
    async get(id){
        try {
            console.log(id);
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log('something went wrong in crud repository')
            return error;
        }
    }
    async getAll(){
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            console.log('something went wrong in crud repository')
            return error;
        }
    }
    async delete(id){
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            return error;
        }
    }
    async update(id,data){
        try {
            const response = await this.model.findByIdAndUpdate(id,data, {new:true}); //we put new: true to return the updated data in the response otherwise it will return the old data
            return response;
        } catch (error) {
            console.log('something went wrong in crud repository')
            return error;
        }
    }
}

export default crudRepository;