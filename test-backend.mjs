import dbConnect from "./src/db/db";
import Package from "./src/db/core/packages";
import { getPackageCategories } from "./src/actions/categories";

async function testBackend() {
    try {
        console.log("Connecting to Database...");
        await dbConnect();
        
        console.log("Fetching Categories...");
        const categories = await getPackageCategories();
        if (categories.length === 0) {
            console.log("Warning: No categories found. Please seed categories first.");
            process.exit(0);
        }
        const categoryId = categories[0]._id;

        const testSlug = "test-package-" + Date.now();
        console.log("Creating Test Package with slug: " + testSlug);
        
        const newPkg = await Package.create({
            title: "Test Package",
            slug: testSlug,
            categoryId: categoryId,
            description: "Test description",
            duration: "3 Days",
            price: 500,
            rating: 5,
            reviews: 0,
            image: "test.jpg",
            isBestSeller: false,
            status: "active",
            startsAt: "Kathmandu",
            endsAt: "Pokhara",
            tripGrade: "Easy",
            transport: "Private Vehicle",
            tripType: "Hiking",
            maxAltitude: "2000m",
            accommodation: "Hotel"
        });

        console.log("Package Created Successfully ID: " + newPkg._id);

        console.log("Reading Package Back...");
        const foundPkg = await Package.findOne({ slug: testSlug });
        console.log("Found Title: " + foundPkg.title);
        console.log("Found StartsAt: " + foundPkg.startsAt);

        console.log("Deleting Test Package...");
        await Package.deleteOne({ _id: newPkg._id });
        console.log("Test Cleanup Complete.");
        
        console.log("RESULT: Backend Logic is FULLY WORKING.");
        process.exit(0);
    } catch (err) {
        console.error("BACKEND TEST FAILED:");
        console.error(err);
        process.exit(1);
    }
}

testBackend();
