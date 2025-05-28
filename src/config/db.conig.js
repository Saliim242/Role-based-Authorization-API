import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB connected: ${conn.connection.host} and database name is ${conn.connection.name}`
        .yellow.bold
    );
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`.red.bold);
    process.exit(1);
  }
};

// export default connectDb;
