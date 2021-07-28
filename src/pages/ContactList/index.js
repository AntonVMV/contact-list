import { connect } from "react-redux";
import ContactItem from "../../components/ContactItem";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";


function ContactList ({ list, fields, onDelete }){
    const [item, setItem] = useState({});
    const [openInfoModal, setInfoModal] = useState(false);
    const [openDeleteModal, setDeleteModal] = useState(false);

    const handleClickOpenInfo = (value) => {
      setItem(value)
      setInfoModal(true);
    };
    const handleCloseInfo = () => {
      setInfoModal(false);
    };


    const handleClickOpenDelete = (value) => {
      setItem(value);
      setDeleteModal(true);
    };
    const handleCloseDelete = () => {
        setDeleteModal(false);
    };
    const onDeleteHandler = () => {
        setDeleteModal(false);
        onDelete(item);
      
    }

    const history = useHistory();

    const handleClick = (index) => {history.push(`/contacts/edit/${index}`)};

    const keys = fields.filter(field => field.display).map(field => field.name);
    const titles = list
        .map(contact => keys.map(key => contact[key]).join(' '));
    
    return (
        <>
        <Link to="/contacts/add" className="add-link"><Button variant="contained" color="primary"><AddIcon />Новый контакт</Button></Link>
        <div className="container" >
            {titles.map((title, index) => (
                <ContactItem key={index} title={title} click={() => handleClickOpenInfo(list[index])} editBtn={() => {handleClick(index)}} deleteBtn={() => { handleClickOpenDelete(list[index]) } }/>
            ))}
        </div>
        
      <Dialog
        open={openInfoModal}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ИНФО:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">        
            {fields.filter(field => item[field.name]).map(field => (
              <div>
              {field.displayName}: {item[field.name]}
            </div>  
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInfo} color="primary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={openDeleteModal}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Подтвердите"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить контакт?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Нет
          </Button>
          <Button onClick={onDeleteHandler} color="primary" autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>

        </>

    );
}

const mapStateToProps = state => ({
    list: state.contactsList,
    fields: state.fieldList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (value) => {
            dispatch({
                type: "DELETE_CONTACT",
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);