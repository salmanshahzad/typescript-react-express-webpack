import React, { useEffect, useState } from "react";
import axios from "../api";
import kappa from "../assets/kappa.jpg";
import { Button } from "semantic-ui-react";

export default () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        (async () => {
            const response = await axios.get("/test");
            setMessage(response.data.message);
        })();
    }, []);

    return (
        <React.Fragment>
            <h1>{message}</h1>
            <Button primary>test</Button>
            <img src={kappa} />
        </React.Fragment>
    );
};
