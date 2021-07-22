import "./style.css";
import { TextField } from "@material-ui/core";


export default function({ title }) {
    return(
        <>
        <div className="new-contact">
            <TextField id="standard-basic" label={title} className="textfield"/>
        </div>
        </>

    );
}