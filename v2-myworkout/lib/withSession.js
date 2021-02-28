import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
    console.log("Session Secret Length",process.env.SESSION_SECRET.length)
    return withIronSession(handler, {
        password: process.env.SESSION_SECRET,
        cookieName: "ironCK",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    });
}
