import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";

/*config*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("morgan"));
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,'public/assets')));


/*file Storage*/
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets");
    },
    filename : function(req,file,cb){
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

/*Routes with files*/
app.post("/auth/register",upload.single("picture"), register);

/* mongoose setup */
const PORT = 3001 || 6001;
mongoose.connect('mongodb+srv://dummyuser:Rajeev0057@cluster0.poel0rb.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));