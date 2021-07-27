import "./style.css";
import { TextField } from "@material-ui/core";


export default function({ title, set, prevValue, keyName }) {
    return(
        <>
        <div className="new-contact" >
            <TextField id="standard-basic" label={title} className="textfield" onChange = {e => {
                set({
                    ...prevValue,
                    [keyName]: e.target.value
                }); 
            }}/>
        </div>
        </>

    );
}