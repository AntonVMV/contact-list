import "./style.css";
import { TextField } from "@material-ui/core";
import { useState } from "react";


export default function({ title, set, prev, keyVal}) {
    return(
        <>
        <div className="new-contact">
            <TextField id="standard-basic" label={title} className="textfield" onChange = {e => {
                set({
                    ...prev,
                    [keyVal]: e.target.value
                }); 
            }}/>
        </div>
        </>

    );
}