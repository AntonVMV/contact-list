import { connect } from 'react-redux';
import ContactItem from '../../components/ContactItem';
import { Link } from 'react-router-dom';
import './style.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import * as actions from '../../store/contactsList/actions';


function ContactList({ list, fields, onDelete }) {
  const [forInfo, setForInfo] = useState(null);
  const [forDelete, setForDelete] = useState(null);

  const handleClickOpenInfo = (value) => {
    setForInfo(value);
    setForDelete(null);
  };
  const handleClose = () => {
    setForInfo(null);
    setForDelete(null);
  };

  const history = useHistory();
  const keys = fields.filter(field => field.display).map(field => field.name);
  const titles = list.map(contact => keys.map(key => contact[key]).join(' '));

  return (
    <>
      <Link to="/contacts/add" className="add-link">
        <Button variant="contained" color="primary">
          <AddIcon/>
          Новый контакт
        </Button>
      </Link>

      <div className="container">
        {titles.map((title, index) => (
          <ContactItem
            key={index}
            title={title}
            click={() => handleClickOpenInfo(list[index])}
            editBtn={() => history.push(`/contacts/edit/${index}`)}
            deleteBtn={() => {
              setForInfo(null);
              setForDelete(list[index]);
            }}/>
        ))}
      </div>

      <Dialog
        open={forInfo}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ИНФО:
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {fields.filter(field => forInfo && forInfo[field.name]).map(field => (
              <div>
                {field.displayName}: {forInfo[field.name]}
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={forDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Подтвердите
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить контакт?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Нет
          </Button>
          <Button
            onClick={() => {
              onDelete(forDelete);
              handleClose();
            }}
            color="primary"
            autoFocus
          >
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

const mapDispatchToProps = (dispatch) => ({
  onDelete: (value) => dispatch(actions.itemDelete(value)),
});
// const mapDispatchToProps = {
//   onDelete: actions.itemDelete,
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
