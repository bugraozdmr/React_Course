import {useState} from 'react'

export default function (initialValue) {
  const [value,setValue] = useState(initialValue);

  const reset = () => {
    setValue('');
  }

  const bind = {
    value,
    onChange : (e) => {
        setValue(e.target.value);
    }
  }

  return [value,bind,reset];
}
