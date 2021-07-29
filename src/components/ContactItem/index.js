import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";




export default function({ title, click, deleteBtn, editBtn }) {
   const id = 1;
    return(
        <div className="contact" >
            <span className="display-info" onClick={click}>
                {title}
            </span>
            <div className="controls">
                <Button variant="contained" color="primary" onClick={editBtn}>EDIT</Button>
                <Button variant="contained" color="secondary" onClick={deleteBtn}>DELETE</Button>
            </div>
        </div>
    );
}