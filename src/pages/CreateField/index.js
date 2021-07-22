import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import CreateContactItem from "../../components/CreateItem";
import "./style.css"

function CreateField ( ){

    const titles = [{displayName: "Имя поля"}, {displayName: "Ключ поля"}]
    return (
        <>
        <div className="field-container">
        <div className="new-contact-container">
            {titles.map(item => (
                <CreateContactItem title={item.displayName} />
            ))}
        </div>
        <div className="save-btn">
            <Button variant="contained" color="primary" >Сохранить</Button>
        </div>
        </div>
        </>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CreateField)