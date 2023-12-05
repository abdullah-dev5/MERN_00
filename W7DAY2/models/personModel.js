const  mongoose = require('mongoose');


const PersonSchema = new mongoose.Schema(
{
    username : String,
    role :{ type: String, default:"user" },
    email : String 
}   

)

const  PersonModel = mongoose.model('people',PersonSchema);

module.exports  = PersonModel;