import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Profile = (props) => {
  const handleName = () => alert(`my name is ${props.name}`);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {props.children}

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.bio}</Card.Text>
          <Card.Text>{props.profession}</Card.Text>
          <Button variant="primary" onClick={handleName}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Profile.propTypes = {
  bio: PropTypes.string,
};

Profile.defaultProps = {
  name: PropTypes.string,
};

export default Profile;
