import { connect } from 'react-redux';
import './style.css';
import { useHistory } from 'react-router-dom';
import * as actions from '../../store/fieldList/actions';
import FieldForm from '../../components/FieldForm';

function CreateField(props) {
  const history = useHistory();

  return (
    <>
      Создание Поля:
      <FieldForm onSave={item => {
        props.onSave(item);
        history.push('/fields');
      }} />
    </>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch) => ({
  onSave: (value) => dispatch(actions.fieldCreate(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateField);
