const {
    getPerson,
    createPerson
} = require("../services/Person.services")


exports.GetPerson=async (req,res)=>
{
    const person = await getPerson();
    res.json(person)
}
exports.createPerson = async (req,res) =>
{
    const {username , role , email } = req.body;
const person = await createPerson(username,role,email);
res.json(person);

}
