import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import CreateContactItem from "../../components/CreateItem";
import "./style.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function CreateField ( props ){
    const [value, setValue] = useState('');

    const titles = [{fieldName: 'Имя поля', key: 'displayName',}, {fieldName: 'Ключ поля', key: 'name', }]
    return (
        <>
        <div className="field-container">
            <div className="new-contact-container">
                {titles.map((item, index) => (
                    <CreateContactItem key={index} title={item.fieldName} keyName={item.key} set={setValue} prevValue={value} />
                ))}
            </div>
            <span>Показывать на главном экране:</span>    
            <input type='checkbox' onChange = {e => setValue({...value, display: e.target.checked})}></input>
            <div className="save-btn">
            <Link to="/fields" className="link"><Button variant="contained" color="primary" onClick={() => {
                if(!value){
                    return;
                }
                props.onSave(value);
            }}>Сохранить</Button></Link>
            
            </div>
        </div>
        </>
    );
}

const mapStateToProps = state => ({
    fields: state.fieldList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (value) => {
            dispatch({
                type: "CREATE_FIELD",
                payload: value,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateField)