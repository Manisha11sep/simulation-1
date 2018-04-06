module.exports = {
 
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },

    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, price, image_url } = req.body;
    
        dbInstance.create_product([ name, price, image_url ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },

      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_product([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      }
    };
    


