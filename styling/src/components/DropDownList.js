import dropdownList from "../data/dropdownList";

const DropDownList = () => {
  return (
    <div className="dropdown-container">
      <select>
        {dropdownList.map((item, index) => (
          <option key={index} value={item}>
            {item.sport}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;
