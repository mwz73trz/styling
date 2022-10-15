import dropdownList from "../data/dropdownList";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";

const DropDownList = () => {
  return (
    <div className="dropdown-container">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          {dropdownList.map((item, index) => (
            <Dropdown.Item>{item.sport}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

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
