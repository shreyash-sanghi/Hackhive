import React from "react";
import Chatbot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const chatbox = () => {
    const steps = [
        {
          id: "Greet",
          message: "Hello, Welcome to our website",
          trigger: "Ask Name",
        },
        {
          id: "Ask Name",
          message: "Please type your name?",
          trigger: "waiting1", // Change trigger to "waiting1" to match the id of the next step
        },
        {
          id: "waiting1",
          user: true,
          trigger: "Name",
        },
        {
          id: "Name",
          message: "Hi {previousValue}, Please select your issue!",
          trigger: "issues",
        },
        {
          id: "issues",
          options: [
            { value: "React", label: "React", trigger: "React" },
            { value: "hi", label: "hi", trigger: "hi" },
          ],
        },
        {
          id: "React",
          message: "You selected React",
          end: true,
        },
        { id: "hi", message: "You selected hi", end: true },
      ];
      
  return (
    <>
      <Segment floated="right">
        <Chatbot steps={steps}></Chatbot>
      </Segment>
    </>
  );
};

export default chatbox;
