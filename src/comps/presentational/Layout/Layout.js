import React from 'react';
import Aux from '../../hoc/Aux';
import classes from "./Layout.css";
import ToolBar from "../Nav/Navigation";

const layout = (props) => (
    <Aux>
        <ToolBar />
        <main className={classes.container}>
            {props.children}
        </main>
    </Aux>
);

export default layout;