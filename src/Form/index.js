import React, { useState, useRef } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const contentTrimmed = newTaskContent.trim();

    if (!contentTrimmed) {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
