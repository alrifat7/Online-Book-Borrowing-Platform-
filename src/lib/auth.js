    import { betterAuth } from "better-auth";
    import { MongoClient } from "mongodb";
    import { mongodbAdapter } from "better-auth/adapters/mongodb";

    const client = new MongoClient(process.env.MONGODB_URI, {
    tls: true,
    tlsAllowInvalidCertificates: true,
    });

    const db = client.db("OnlineBookBorrowingPlatform");

    export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    secret: process.env.BETTER_AUTH_SECRET,
    emailAndPassword: {
        enabled: true,
    },
    });