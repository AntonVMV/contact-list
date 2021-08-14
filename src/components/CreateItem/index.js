import './style.css';
import { TextField } from '@material-ui/core';

export default function ({ title, value, onChange }) {
  return (
    <div className="new-contact">
      <TextField
        id="standard-basic"
        label={title}
        value={value}
        className="textfield"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
