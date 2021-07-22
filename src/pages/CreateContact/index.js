import { connect } from "react-redux";
import CreateContactItem from "../../components/CreateItem";
import "./style.css"
import { Button } from "@material-ui/core";



function CreateContact ({  fields }){


    return (
        <>
        <div className="new-contact-container">
            {fields.map(item => (
                <CreateContactItem title={item.displayName} />
            ))}
        </div>
        <div className="save-btn">
            <Button variant="contained" color="primary" >Сохранить</Button>
        </div>

         </>
    );
}

const mapStateToProps = state => ({
    fields: state.fieldList,
});

export default connect(mapStateToProps)(CreateContact)