import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";




export default function({ title }) {
   
    return(
        <div className="contact">
            <span className="display-info">
                {title}
            </span>
            <div className="controls">
                <Button variant="contained" color="primary">EDIT</Button>
                <Button variant="contained" color="secondary">DELETE</Button>
            </div>
        </div>
    );
}