const PetController = require('../controllers/controller.database');

module.exports = (app) => {
    app.get('/api/pets', PetController.index);
    app.post('/api/create/pets', PetController.create);
    app.get('/api/pets/:id', PetController.show);
    app.put('/api/pets/update/:id', PetController.update);
    app.delete('/api/pets/adopt/:id', PetController.destroy)
}