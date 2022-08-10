import mongoose from 'mongoose'

export const run = async ()=> {

  try{
    await mongoose.connect("mongodb+srv://swapland:NWC2QXhkltx0epdW@cluster0.urt8qts.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB connection is success.")
  }
  catch(error){
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + error);
  }
}