import React, { useState } from "react";
import querystring from "querystring";

import fetchJson from "../../lib/fetchJson";
import useUser from "../../lib/useUser";

function Tracker({ today }) {}
export async function getServerSideProps(ctx) {
    const today = new Date().toDateString("yyyyMMdd");
    const urlToday = querystring.encode({ today: today });
    console.log("URLTODAY: ", urlToday);
    try {
        const response = await fetchJson(`/api/workout${urlToday}`);
        // TODO: finish the today page
        // TODO finish the today api query
    } catch (error) {
        console.error("Todays Page Error: ", error);
        res.status(400).json({ error: error });
    }
}
export default Tracker;
