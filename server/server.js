const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const multer = require('multer');
const storage = require('multer-gridfs-storage');
const url = require('mongodb://localhost:27017/database')

const { typeDefs, resolvers } = require('./schemas');
const db =  require('./config/connection');

const storage = new GridFsStorage({ url }); // Create a storage object with a given configuration
const upload = multer({ storage }); // Set multer storage engine to the newly created object

// Upload your files as usual
app.post('/profile', upload.single('avatar'), (req, res, next) => { 
    /*....*/ 
});

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
    /*....*/ 
});

app.post('/cool-profile', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]), (req, res, next) => {
    /*....*/ 
});


const PORT = process.env.PORT || 5173;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

startApolloServer();