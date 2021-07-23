import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import CreateContactItem from "../../components/CreateItem";
import "./style.css";
import { useState } from "react";

function CreateField ( props ){
    const [value, setValue] = useState({});

    const titles = [{fieldName: 'Имя поля', key: 'displayName'}, {fieldName: 'Ключ поля', key: 'name'}]
    return (
        <>
        <div className="field-container">
            <div className="new-contact-container">
                {titles.map((item, index) => (
                    <CreateContactItem key={index} title={item.fieldName} keyVal={item.key} set={setValue} prev={value} />
                ))}
            </div>
            <div className="save-btn">
                <Button variant="contained" color="primary" onClick={()=>{props.onSave(value)}}>Сохранить</Button>
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