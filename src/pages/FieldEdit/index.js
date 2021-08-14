import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as actions from '../../store/fieldList/actions';
import FieldForm from '../../components/FieldForm';


function CreateField(props) {
  const params = useParams();
  const history = useHistory();
  const item = props.list[params.id];

  return (
    <FieldForm item={item} onSave={item => {
      props.onUpdate(item, params.id);
      history.push('/fields');
    }} />
  );
}

const mapStateToProps = state => ({
  list: state.fieldList,
});
const mapDispatchToProps = (dispatch) => ({
  onUpdate: (value, id) => dispatch(actions.fieldUpdate(value, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateField);
