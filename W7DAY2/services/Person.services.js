const PersonModel = require("../models/personModel")


const createPerson = async (username,role,email)=>{

    return await PersonModel.create({username,role,email});
}

const getPerson = async () => {
    return await PersonModel.find();
  };




  module.exports = {
    createPerson,
    getPerson
};
  