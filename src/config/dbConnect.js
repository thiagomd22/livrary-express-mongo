import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://admin:admin123@cluster0.neoudj4.mongodb.net/livraria?retryWrites=true&w=majority");

  return mongoose.connection;
};

export default conectaNaDatabase;