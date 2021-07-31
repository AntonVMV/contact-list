import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import CreateContactItem from "../../components/CreateItem";
import "./style.css";
import { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/action";

function CreateField ( props ){
    const [value, setValue] = useState();
    const [state, setState] = useState({checkedA: false});
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
        setValue({...value, display: event.target.checked});
      };
    const history = useHistory();

    const handleClick = () => {history.push("/fields")}

    function checkValue(){
        console.log(value)
        for(let key in value){
            if(!value[key]){
                return false;
            }
            return true;
        }
    }
      
    const titles = [{fieldName: 'Имя поля', key: 'displayName'}, {fieldName: 'Ключ поля', key: 'name' }]
    return (
        <>
        <div className="field-container">
            <div className="new-contact-container">
                {titles.map((item, index) => (
                    <CreateContactItem key={index} title={item.fieldName} keyName={item.key} set={setValue} prevValue={value} />
                ))}
            </div>
            <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChange} disabled={!checkValue()} name="checkedA" />}
                label="Показывать на главном экране"
            />
            <div className="save-btn">
            <Button variant="contained" color="primary" disabled={!checkValue()} onClick={() => {
                props.onSave(value);
                handleClick();
                }}>Сохранить</Button>
            
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
        onSave: (value) => dispatch(actions.fieldCreate(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateField)