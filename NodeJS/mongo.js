import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose.connect("mongodb+srv://abhijeetraghuvanshi9842abhi:abhijeet12r@cluster0.2su6d70.mongodb.net/").then(() => {console.log("Connected to DB");}).catch((err) => {console.log(err);});


const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/register", async (req, res) => {
    try{
        const name = req.body.name;
        const password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name: name,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        if(!savedUser)
            return res.status(404).json({message : "something went wrong"});
        res.status(201).json({message : "user created successfully"});
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.get("/allusers", async (req, res) => {
    try{
        const users = await User.find();
        if(!users)
            return res.status(404).json({message : "something went wrong"});
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.put("/update/:id", async (req, res) => {
    try{
        const upadtedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true,});
        if(!upadtedUser)
            return res.status(404)
    }
    catch(err){
        res.status(500).send(err);
    }
}
)