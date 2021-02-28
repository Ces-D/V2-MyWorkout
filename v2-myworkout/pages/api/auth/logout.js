import withSession from "../../../lib/withSession";

export default withSession(async (req, res) => {
    console.log("Session Before Being Destroyed");
    console.log(req.session);
    req.session.destroy();
    res.json({ isLoggedIn: false });
});
