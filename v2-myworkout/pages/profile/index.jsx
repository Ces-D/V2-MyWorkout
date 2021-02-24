import React, { useState } from "react";
import useSWR from "swr"

import withAuth from "../../components/hocs/withAuth";

function Profile(props) {
    return (
        <div>
            <h1>{JSON.stringify(props)}</h1>
        </div>
    );
}

export default withAuth(Profile);
