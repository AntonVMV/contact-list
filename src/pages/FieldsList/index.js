import { connect } from 'react-redux';
import FieldItem from '../../components/FieldItem';
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
import * as actions from '../../store/fieldList/actions';

function FieldList({ fields, onDelete }) {
  const [item, setItem] = useState({});
  const [openDeleteModal, setDeleteModal] = useState(false);
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

  };

  const history = useHistory();

  const handleClick = (index) => {
    history.push(`/fields/edit/${index}`);
  };

  return (
    <>
      <Link to="/fields/add" className="add-link"><Button variant="contained" color="primary"><AddIcon/>Новое
        поле</Button></Link>
      <div className="container">
        {fields.map((item, index) => (
          <FieldItem key={index} title={item.displayName} editBtn={() => {
            handleClick(index);
          }} deleteBtn={() => handleClickOpenDelete(fields[index])}/>
        ))}
      </div>

      <Dialog
        open={openDeleteModal}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Подтвердите'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить поле?
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

const mapStateToProps = state => (
  {
    fields: state.fieldList,
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (value) => dispatch(actions.fieldDelete(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldList);
