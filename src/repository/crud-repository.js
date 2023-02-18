class crudRepository{
    constructor(Model) {
        this.model = Model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in the crud repo layer');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in the crud repo layer');
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in the crud repo layer');
            throw error;
        }
    }

    async update(id,data) {
        try {
            const response = await this.model.findByIdandUpdate(id, data, { new: true });
            return response;
        } catch (error) {
            console.log('Something went wrong in the crud repo layer');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.log('Something went wrong in the crud repo layer');
            throw error;
        }
    }
}

export default crudRepository;