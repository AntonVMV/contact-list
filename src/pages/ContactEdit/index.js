import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateContactItem from "../../components/CreateItem";
import * as actions from "../../store/action";

function ContactEdit (props) {
    const params = useParams();
    const history = useHistory();

    const handleClick = () => {history.push("/contacts")};

    const [value, setValue] = useState(props.list[params.id]);

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
                <CreateContactItem key={index} title={item.displayName} inputValue={value[item.name]} prevValue={value} keyName={item.name} set={setValue} />
            ))}
        </div>
        <div className="save-btn">
            <Button variant="contained" color="primary" disabled={!checkValue()} onClick={() => {
                props.onUpdate(value, params.id);
                handleClick();
                }}>Сохранить</Button>
        
        </div>

            </>
        );  
    }

    const mapStateToProps = state => ({
        list: state.contactsList,
        fields: state.fieldList,
    });
    
    const mapDispatchToProps = (dispatch) => {
        return {
            onUpdate: (value, id) => dispatch(actions.itemUpdate(value, id))
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit)