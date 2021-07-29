import "./style.css";
import { TextField } from "@material-ui/core";


export default function({ title, set, prevValue, keyName, inputValue }) {
    return(
        <>
        <div className="new-contact" >
            <TextField id="standard-basic" label={title} value={inputValue} className="textfield" onChange = {e => {
                set({
                    ...prevValue,
                    [keyName]: e.target.value
                }); 
            }}/>
        </div>
        </>

    );
}