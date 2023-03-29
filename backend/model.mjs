import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Course collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const courseSchema = mongoose.Schema({
	courseNumber:  { type: String, required: true },
    title:   { type: String, required: true },
    credits: { type: Number, required: true, default: 0, min:[0, "Enter the number of credits earned"] },
	date:    { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Course = mongoose.model("Course", courseSchema);


// CREATE model *****************************************
const createCourse = async (courseNumber, title, credits, date) => {
    const course = new Course({ 
        courseNumber: courseNumber, 
        title: title,
        credits: credits, 
        date: date 
    });
    return course.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveCourse = async () => {
    const query = Course.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCourseByID = async (_id) => {
    const query = Course.findById({_id: _id});
    return query.exec();
}


// UPDATE model *****************************************************
const updateCourse = async (_id, courseNumber, title, credits, date) => {
    const result = await Course.replaceOne({_id: _id }, {
        courseNumber: courseNumber, 
        title: title,
        credits: credits, 
        date: date 
    });
    return { 
        id: _id, 
        courseNumber: courseNumber, 
        title: title,
        credits: credits, 
        date: date 
    }
}


// DELETE model based on _id  *****************************************
const deleteById = async (_id) => {
    const result = await Course.deleteOne({_id: _id});
    return result.deletedCount;
};


// Export our variables for use in the controller file.
export { createCourse, retrieveCourse, retrieveCourseByID, updateCourse, deleteById }