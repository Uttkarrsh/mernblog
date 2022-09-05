const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute = require("./routes/authen");
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const catRoute = require("./routes/categories")
const multer = require("multer")
const path = require('path');
let cors = require("cors");
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
 
//  app.use(cors(corsOptions))
app.use(cors());


dotenv.config();
app.use(express.json());
app.use("/image",express.static(path.join(__dirname,"/image")))

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));


const storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null, "image");
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage});
app.post("/api/upload", upload.single("images"), (req,res)=>{
    res.status(200).json("File has been uploaded");
})

// const path = require('node:path');

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", catRoute);

// app.use(express.static(path.join(__dirname, "/frontend/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
// });

app.get('/',(req,res)=>{
    res.json("Server Start");
})

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })

app.listen(process.env.PORT || 8000 ,()=>{
    console.log("Backened is Running")
})

//https://tubular-granita-176c31.netlify.app/