const express = require('express')

const mongoose = require('mongoose')
const router = express.Router();
const app = express();

connectDatabase().catch((err) => console.log(err));

async function connectDatabase() {
    await mongoose.connect("mongodb+srv://abdullah-dev5:Alanwalker45@cluster0.g7vx49e.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log("database is connected");
    }).catch((error) => {
        console.log(error)
    });
}
app.use(express.json());
app.use(router);


//findbyidAndDelete will delete a data of specifc id.
//deleteMany()

const PersonSchema = new mongoose.Schema({
    //Validation in Mongoose
    //Validation for String and use { then type =? , [conditions, messeage]}
    name: {
        type: String,
        required: [true, "please Entewr name "],
        minLength: [5, "Min Length shuuld not Under 5 "],
        maxLength: [15, "Max Length should not excceed than 15"]
        //password:{type:String , select:false}//password won't fetched.
    },
    age: { type: Number, min: [3, "Person is not allowed uner Age three"] },
    city: String,
});
const MovieSchema = new mongoose.Schema({
    moviename: {
        type: String, required: [true, ""]
    }
    ,
    movielength: {
        type: Number,
        min: [20, "Movie Should be Min 20 mins"],
        max: [180, "Max length should be 180"]
    },
    minAge: {
        type: Number, min: [3, "Min Age should be 3"],
    },
    maxAge: {
        type: Number,
        max: [90, "Max Age Should be 90"]
    },
    catogory: String,
});

const PersonModel = mongoose.model("Persons", PersonSchema);
const MovieModel = mongoose.model("Movies", MovieSchema);

router.all("/", (req, res) => {
    res.json({
        message: "we are live 🚀🎄🎄🚀",
     });
});

router.get("/person", async (req, res) => {
    const person = await PersonModel.find({}, { __v: 0 });
    res.json(person);
});


router.post("/person", async (req, res) => {
    console.log(req.body);
    const { name, age, city } = req.body;
    const personCreated = new PersonModel({ name: name, age: age, city: city });
    personCreated.save();
    res.json(personCreated);
});

router.patch("/person", async (req, res) => {
    const { id, name, age, city } = req.body;
    const foundPerson = await PersonModel.findById(id);
    if (foundPerson) {
        foundPerson.name = name;
        foundPerson.age = age;
        foundPerson.city = city;
        foundPerson.save();
        res.json(foundPerson);
    } else
        res.status(404).json({
            message: "Not Found",
        });
});

router.delete('/person', async (req, res) => {
    const { id } = req.body;
    const personDeleted = await PersonModel.findOneAndDelete({ id: id })

    res.json(personDeleted)

})

router.get("/movie", async (req, res) => {
    const movie = await MovieModel.find({}, { __v: 0 });
    res.json(movie);
});
router.post("/movie", async (req, res) => {
    console.log(req.body);
    const { moviename, minAge, maxAge, catogory } = req.body;
    const movieCreated = new PersonModel({ moviename: moviename, minAge: minAge, maxAge: maxAge, catogory: catogory });
    movieCreated.save();
    res.json(movieCreated);
});


router.patch("/movie", async (req, res) => {
    const { id, moviename, minAge, maxAge, catogory } = req.body;
    const foundMovie = await MovieModel.findById(id); // gets the todo item by the id
    if (foundPerson) {

        foundMovie.moviename = moviename;
        foundMovie.minAge = minAge;
        foundMovie.maxAge = maxAge;
        foundMovie.catogory = catogory;
        foundMovie.save();
        res.json(foundMovie);
    } else
        res.status(404).json({
            message: "Not Found",
        });
});

router.delete('/movie', async (req, res) => {
    const { id } = req.body;
    const movieDleted = await MovieModel.findOneAndDelete({ id: id })

    res.json(movieDleted)

})

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server Formed")
})


