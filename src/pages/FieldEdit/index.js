import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import CreateItem from "../../components/CreateItem";
import { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as actions from "../../store/action";


function CreateField ( props ){
    
    const params = useParams();
    const [value, setValue] = useState(props.fields[params.id]);
    const [state, setState] = useState({checkedA: false});
    console.log(props.fields[params.id])
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
        setValue({...value, display: event.target.checked});
      };
    const history = useHistory();

    const handleClick = () => {history.push("/fields")}

    function checkValue(){
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
                    <CreateItem key={index} title={item.fieldName} inputValue={value[item.key]} keyName={item.key} set={setValue} prevValue={value} />
                ))}
            </div>
            <FormControlLabel
                control={<Checkbox checked={value.display} onChange={handleChange} name="checkedA" />}
                label="Показывать на главном экране"
            />
            <div className="save-btn">
            <Button variant="contained" color="primary" disabled={!checkValue()} onClick={() => {
                props.onUpdate(value, params.id);
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
        onUpdate: (value, id) => dispatch(actions.fieldUpdate(value, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateField)