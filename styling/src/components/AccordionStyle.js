import addressesData from "../data/addressesData";
import { Accordion } from "react-bootstrap";

const AccordionStyle = () => {
  return (
    <Accordion className="accordion-container">
      {addressesData.map((item, index) => (
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{item.name}</Accordion.Header>
          <Accordion.Body>
            <p>{item.address}</p>
            <p>
              {item.address}, {item.state} {item.zipcode}
            </p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionStyle;
