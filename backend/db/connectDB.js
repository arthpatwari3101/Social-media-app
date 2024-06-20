import mongoose from "mongoose";

const uri = process.env.MONGO_URL;


const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL, {
			// To avoid warnings in the console
			//console.log(conn)
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;