import ProgressBar from "react-customizable-progressbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomNavbar from "../reusable-components/CustomNavbar";
import "./Summary.css";

const Summary = () => {
  return (
    <>
      <CustomNavbar />
      <div className="container">
        <Card style={{ width: "20rem" }} className='item'>
          <Card.Header as="h5">Insulin</Card.Header>
          <div className='center'><ProgressBar radius={70} progress={80} strokeColor={"red"} /></div>
          <Card.Body>
            <Card.Text>Your insulin is high. Seek help.</Card.Text>

            <div className='container'>
                <Button variant="danger" className='Button'>Request help</Button>
                <Button variant="info" className='Button'>Details</Button>
            </div>
            


          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }} className='item'>
          <Card.Header as="h5">Cholestrol</Card.Header>
          <div className='center'><ProgressBar progress={20} radius={60} strokeColor={"green"} /></div>
          <Card.Body>
            <Card.Text>Cholestrol levels okay</Card.Text>

            <div className='container center'>
                <Button variant="info" className='Button'>Details</Button>
            </div>

          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }} className='item'>
          <Card.Header as="h5">Blood Pressure</Card.Header>
          <div className='center'><ProgressBar radius={60} progress={60} strokeColor={"orange"} /></div>
          <Card.Body>
            <Card.Text>Blood Pressure is above average</Card.Text>

            <div className='container center'>
                <Button variant="info" className='Button'>Details</Button>
            </div>

          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Summary;
