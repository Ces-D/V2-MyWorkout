import React from "react";

import useUser from "../../lib/useUser";
import useTracker from "../../lib/useTracker";

function Tracker() {
    const { user } = useUser({ redirectTo: "/login" });
    const { day, loadingEvents } = useTracker(user);

    if (!user?.isLoggedIn || loadingEvents) {
        return <div>Loading...</div>;
    }

    return <div>{JSON.stringify(day)}</div>;
}

export default Tracker;
