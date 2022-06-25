import Select from "react-select";

// const SelectComponent = ({ title, value, onChange, options }) => {
//   return (
//     <div>
//       <span>{title}</span>

//       <Select value={value} onChange={onChange} options={options} />
//     </div>
//   );
// };


////////******** rest Operator ************/

const SelectComponent = ({ title, ...rest}) => {
    // console.log(rest);
    return (
      <div >
        <span>{title}</span>
  
        <Select {...rest} />
      </div>
    );
  };


export default SelectComponent;
