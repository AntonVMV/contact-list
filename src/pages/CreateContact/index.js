import { connect } from "react-redux";
import CreateContactItem from "../../components/CreateItem";
import "./style.css"
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Link } from 'react-router-dom';



function CreateContact (props){
    const [value, setValue] = useState('');

    return (
        <>
        <div className="new-contact-container">
            {props.fields.map((item, index) => (
                <CreateContactItem key={index} title={item.displayName} prevValue={value} keyName={item.name} set={setValue} />
            ))}
        </div>
        <div className="save-btn">
            <Link to="/contacts" className="link"><Button variant="contained" color="primary" onClick={() => {
                if(!value){
                    return;
                }
                props.onSave(value);
            }}>Сохранить</Button></Link>
            
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