import dbConnect from "@/db/db";
import Package from "@/db/core/packages";

async function clearPackages() {
    try {
        await dbConnect();
        const result = await Package.deleteMany({});
        console.log(`Successfully deleted ${result.deletedCount} packages.`);
        process.exit(0);
    } catch (error) {
        console.error("Error clearing packages:", error);
        process.exit(1);
    }
}

clearPackages();
