import { connect } from "react-redux";
import CreateContactItem from "../../components/CreateItem";
import "./style.css"
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/action";

function CreateContact (props){
    const history = useHistory();

    const handleClick = () => {history.push("/contacts")};

    const [value, setValue] = useState('');

    function checkValue(){
        for(let key in value){
            if(!value[key]){
                return false;
            }
            return true;
        }
    }

    return (
        <>
        <div className="new-contact-container">
            {props.fields.map((item, index) => (
                <CreateContactItem key={index} title={item.displayName} prevValue={value} keyName={item.name} set={setValue} />
            ))}
        </div>
        <div className="save-btn">
            <Button variant="contained" color="primary" disabled={!checkValue()} onClick={() => {
                props.onSave(value);
                handleClick();
                }}>Сохранить</Button>
       
        </div>

         </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (value) => dispatch(actions.itemCreate(value))
    }
}
const mapStateToProps = state => ({
    fields: state.fieldList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact);