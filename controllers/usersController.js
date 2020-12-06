const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {
  //get users from db
  try {
    const userList = await UserModel.findAll({});
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured");
  }
};

//on get request 
exports.show_add_user_form = (req, res) => {
  res.render("addUser");
};



// on post request

exports.add_user = async (req, res) => {
    //add to db 
    try {
      const newUser = await UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
      res.redirect("/users");
      
    } catch (error) {
      res.send("An error occured.")
    }
};

exports.delete_user = async (req, res) => {
  
  try {
    const deleteUser = await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/users")
  } catch (error) {
    
  }
};

exports.edit_user = async (req, res) => {
  console.log(req);
  try {
    const editUser = await UserModel.update({
      firstName: req.body.first_name
    }, 
      {where: { id: req.params.id}

    });
    
  } catch (error) {
    
  }
}