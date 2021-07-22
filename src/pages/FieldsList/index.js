import { connect } from "react-redux";
import FieldItem from "../../components/FieldItem";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"

function FieldList ({ fields }){


    return (
        <>
        <Link to="/fields/add" className="add-link"><Button variant="contained" color="primary"><AddIcon />Новое поле</Button></Link>
        <div className="container">
            {fields.map(item => (
                <FieldItem title={item.displayName} />
            ))}
        </div>
        </>

    );
}

const mapStateToProps = state => ({
    fields: state.fieldList,
});

export default connect(mapStateToProps)(FieldList)