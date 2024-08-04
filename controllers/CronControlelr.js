// cronJobs.js
const cron = require("node-cron");
const Users = require("./models/UsersModel");

// Schedule a task to run every day at midnight
cron.schedule("0 0 * * *", async () => {
  try {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
    // Find and delete users who have not verified their email within 24 hours
    const result = await Users.deleteMany({
      verified: false,
      createdAt: { $lte: twentyFourHoursAgo },
    });
    console.log(`Deleted ${result.deletedCount} unverified users`);
  } catch (error) {
    console.error("Error deleting unverified users:", error.message);
  }
});
