import mongoose from 'mongoose';
import { environment } from '../config/config.js';

let env = process.env.NODE_ENV || "production";

let db = await mongoose.connect(environment[env].db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then().catch(err => console.error(err));

export default db;