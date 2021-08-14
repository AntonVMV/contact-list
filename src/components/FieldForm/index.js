import { useState } from 'react';
import Input from '../CreateItem';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

export default function CreateField({ item = {}, onSave }) {
  const [name, setName] = useState(item.name || '');
  const [displayName, setDisplayName] = useState(item.displayName || '');
  const [checked, setChecked] = useState(item.checked || false);

  const checkValue = () => name && displayName;

  return (
    <>
      <div className="field-container">
        <div className="new-contact-container">
          <Input
            title="Имя поля"
            value={displayName}
            onChange={setDisplayName}
          />
          <Input
            title="Ключ поля"
            value={name}
            onChange={setName}
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={setChecked}
              disabled={!checkValue()}
              name="checkedA"
            />
          }
          label="Показывать на главном экране"
        />

        <div className="save-btn">
          <Button
            variant="contained"
            color="primary"
            disabled={!checkValue()}
            onClick={() => onSave({ name, displayName, checked })}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </>
  );
}
