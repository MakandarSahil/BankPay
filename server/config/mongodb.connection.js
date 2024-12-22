const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    const mongourl = process.env.MONGOD_URI
    await mongoose.connect(mongourl);
    console.log('MONGODB connected....');
  } catch (error) {
    console.error('MONGODB connection failed..... ', error);
    throw error;
  }
};

ConnectDB();
