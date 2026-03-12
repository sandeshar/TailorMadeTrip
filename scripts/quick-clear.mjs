import mongoose from "mongoose";
const MONGODB_URI = "mongodb://localhost:27017/chitrabazaar";
mongoose.connect(MONGODB_URI).then(async () => {
    const Package = mongoose.model("Package", new mongoose.Schema({}));
    const res = await Package.deleteMany({});
    console.log(`Deleted ${res.deletedCount} packages`);
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
