import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb://localhost:27017/Inshorts_Clone';
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
};

export default Connection;
