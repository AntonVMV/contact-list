import "./style.css";
import { TextField } from "@material-ui/core";


export default function({ title, set, prevValue, keyName, fieldValue }) {
    return(
        <>
        <div className="new-contact" >
            <TextField id="standard-basic" value={fieldValue || ""} label={title} className="textfield" onChange = {e => {
                set({
                    ...prevValue,
                    [keyName]: e.target.value
                }); 
            }}/>
        </div>
        </>

    );
}