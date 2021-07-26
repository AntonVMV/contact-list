import { Button } from "@material-ui/core";


export default function({ title, deleteBtn }) {
    return(
        <div className="field">
            <span className="display-info">
                {title}
            </span>
            <div className="controls">
                <Button variant="contained" color="primary">EDIT</Button>
                <Button variant="contained" color="secondary" onClick={deleteBtn}>DELETE</Button>
            </div>
        </div>
    );
}