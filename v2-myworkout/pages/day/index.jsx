import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import withAuth from "../../components/hocs/withAuth";

function Day() {
    const today = new Date.now();
    return (
        <>
            <div className="calendar-tools">
                <ButtonGroup className="mb-2">
                    <Button>Y</Button>
                    <Button>Now</Button>
                    <Button>T</Button>
                </ButtonGroup>
            </div>
        </>
    );
}

export default withAuth(Day);
