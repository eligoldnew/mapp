import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const MessageCardForm = (props) => {
  return (
    <Card body className="message-form">
      <CardTitle>*Acroyoga Near You*</CardTitle>
      <CardText>Are you free today?</CardText>
      {!props.sendingMessage &&
      !props.sentMessage &&
      props.haveUsersLocation ? (
        <Form onSubmit={props.formSubmitted}>
          <FormGroup>
            <Label for="name">Acroyogis</Label>
            <Input
              onChange={props.valueChanged}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name(s)"
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Time Frame</Label>
            <Input
              onChange={props.valueChanged}
              type="textarea"
              name="message"
              id="message"
              placeholder="Ex: 11:30am-1:00pm"
            />
          </FormGroup>
          <Button type="cancel" color="danger" onClick={props.cancelMessage}>
            Cancel
          </Button>{" "}
          <Button type="submit" color="info" disabled={!props.formIsValid()}>
            Share
          </Button>
        </Form>
      ) : props.sendingMessage || !props.haveUsersLocation ? (
        <video
          autoPlay
          loop
          src="https://i.giphy.com/media/BCIRKxED2Y2JO/giphy.mp4"
        ></video>
      ) : (
        <CardText>Thank you for sharing!</CardText>
      )}
    </Card>
  );
};

export default MessageCardForm;
