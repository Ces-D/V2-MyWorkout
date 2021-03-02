import React, { useState } from "react";
import useUser from "../../lib/useUser";

function Profile() {
    const { user } = useUser({ redirectTo: "/login" });
    return (
        <div>
            <div>{JSON.stringify(user)}</div>
            <div>Profile</div>
        </div>
    );
}
export default Profile;
