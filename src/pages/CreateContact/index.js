import { connect } from "react-redux";
import CreateContactItem from "../../components/CreateItem";
import "./style.css"
import { Button } from "@material-ui/core";
import { useState } from "react";



function CreateContact (props){
    const [value, setValue] = useState({});
    return (
        <>
        <div className="new-contact-container">
            {props.fields.map((item, index) => (
                <CreateContactItem key={index} title={item.displayName} prev={value} keyVal={item.name} set={setValue}/>
            ))}
        </div>
        <div className="save-btn">
            <Button variant="contained" color="primary" onClick={()=>{props.onSave(value)}}>Сохранить</Button>
        </div>

         </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (value) => {
            dispatch({
                type: "CREATE_CONTACT",
                payload: value,
            })
        }
    }
}
const mapStateToProps = state => ({
    fields: state.fieldList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact)