import React from 'react';
import Select from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  value: Option | null;
  onChange: (selectedOption: Option | null) => void;
  options: Option[];
  placeholder: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, onChange, options, placeholder }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      className="w-full"
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: '#1a202c',
          borderColor: '#2d3748',
          color: '#fff',
          borderRadius: '9999px',
          
          height: '48px',
     
        }),
        singleValue: (base) => ({
          ...base,
          color: '#fff',
        }),
        placeholder: (base) => ({
          ...base,
          color: '#a0aec0',
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: '#2d3748',
          borderRadius: '8px',
          overflow: 'hidden',
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? '#4a5568' : state.isFocused ? '#2d3748' : '#1a202c',
          color: '#fff',
          cursor: 'pointer',
        }),
        input: (base) => ({
          ...base,
          color: '#fff', // Set the input text color to white
        }),
      }}
    />
  );
};

export default SelectInput;
