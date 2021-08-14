import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreateContactItem from '../../components/CreateItem';
import * as actions from '../../store/contactsList/actions';

function ContactEdit(props) {
  const params = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.push('/contacts');
  };

  const [value, setValue] = useState(props.contact);

  return (
    <>
      <div className="new-contact-container">
        {props.fields.map((item, index) => (
          <CreateContactItem
            key={index}
            title={item.displayName}
            inputValue={value[item.name]}
            prevValue={value}
            keyName={item.name}
            set={setValue}
          />
        ))}
      </div>
      <div className="save-btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.onUpdate(value, params.id);
            handleClick();
          }}
        >
          Сохранить
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = (state, props) => ({
  contact: state.contactsList[props.id],
  fields: state.fieldList,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdate: (value, id) => dispatch(actions.itemUpdate(value, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);
