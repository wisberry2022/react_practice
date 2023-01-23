import mongoose from 'mongoose';

interface Connect {
  isConnected?: number;
}

const connection: Connect = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(`mongodb+srv://wisberry2022:chvrches409@cluster0.8xydiec.mongodb.net/TypeStudy?retryWrites=true&w=majority`)
  connection.isConnected = db.connections[0].readyState;
  console.log('mongodb connect!')
}

export default dbConnect;

