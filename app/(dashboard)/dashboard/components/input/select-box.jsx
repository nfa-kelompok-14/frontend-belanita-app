import { useState, useEffect } from 'react';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';

function SelectBox({
  labelTitle,
  labelDescription,
  defaultValue = '',
  containerStyle = '',
  placeholder,
  labelStyle = '',
  selectBoxStyle = '',
  options,
  updateKey,
  updateFormValue,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateValue = (newValue) => {
    console.log(newValue);
    updateFormValue(updateKey, newValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={`inline-block ${containerStyle}`}>
      <label className={`label ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <select
        className={`select select-bordered w-full ${selectBoxStyle}`}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      >
        <option disabled value="PLACEHOLDER">
          {placeholder}
        </option>
        {options.map((o, k) => (
          <option value={o.value || o.name} key={k}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
