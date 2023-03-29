import 'dotenv/config';
import express from 'express';
import * as courseRegistry from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/courseRegistry', (req,res) => { 
    courseRegistry.createCourse(
        req.body.courseNumber, 
        req.body.title, 
        req.body.credits,
        req.body.date
        )
        .then(course => {
            res.status(201).json(course);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: "The course register could not be created because of incorrect syntax." });
        });
});


// RETRIEVE controller ****************************************************
app.get('/courseRegistry', (req, res) => {
    courseRegistry.retrieveCourse()
        .then(course => { 
            if (course !== null) {
                res.json(course);
            } else {
                res.status(404).json({ Error: "The course register was not found, but it may be available in the future." });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: "The course register could not be accessed." });
        });
});


// RETRIEVE by ID controller
app.get('/courseRegistry/:_id', (req, res) => {
    courseRegistry.retrieveCourseByID(req.params._id)
    .then(course => { 
        if (course !== null) {
            res.json(course);
        } else {
            res.status(404).json({ Error: "The course register was not found, but it may be available in the future." });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: "The course register could not be accessed." });
    });

});


// UPDATE controller ************************************
app.put('/courseRegistry/:id', (req, res) => {
    courseRegistry.updateCourse(
        req.params.id, 
        req.body.courseNumber, 
        req.body.title, 
        req.body.credits,
        req.body.date
    )
    .then(course => {
        res.json(course);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: "The course register could not be updated because of incorrect syntax." });
    });
});


// DELETE Controller ******************************
app.delete('/courseRegistry/:id', (req, res) => {
    courseRegistry.deleteById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: "The course register was not found, but it may be available in the future." });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: "The request to delete a course register failed" });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});