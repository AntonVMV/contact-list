import { connect } from "react-redux";
import ContactItem from "../../components/ContactItem";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"


function ContactList ({ list, fields }){
    const keys = fields.filter(field => field.display).map(field => field.name);


    const titles = list
        .map(contact => keys.map(key => contact[key]).join(' '));

    return (
        <>
        <Link to="/contacts/add" className="add-link"><Button variant="contained" color="primary"><AddIcon />Новый контакт</Button></Link>
        <div className="container">
            {titles.map(title => (
                <ContactItem title={title} />
            ))}
      </div>
        </>

    );
}

const mapStateToProps = state => ({
    list: state.contactsList,
    fields: state.fieldList,
});

export default connect(mapStateToProps)(ContactList)