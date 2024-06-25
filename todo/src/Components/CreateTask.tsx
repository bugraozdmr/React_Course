import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { taskType } from "../proptypes";
import { Button } from "@mui/material";

interface CreateTaskProps {
    onAdd: (task: taskType) => void;
}
  

export const CreateTask : React.FC<CreateTaskProps> = ({onAdd}) => {
  const [task, setTask] = useState<taskType>({
    title: "",
    content: "",
    id:null
  });

  /*const detectChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target;

        setTask((prevTask) => {
            return {
                ...prevTask,
                [name] : value
            }
        })
    }*/

  const submitF = (event:React.FormEvent<HTMLFormElement>) => {
    onAdd(task);
    setTask({
        title:'',
        content:'',
        id:Math.floor(Math.random() * 100) + 1
    })
    event.preventDefault();
  }

  const detectChangetitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      title: event.target.value,
    });
  };

  const detectChangedesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      content: event.target.value,
    });
  };

  return (
    <div className="todoUp">
      <Form className="todoDiv" onSubmit={submitF}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={task.title}
            onChange={detectChangetitle}
            name="title"
          />
          <Form.Text className="text-muted">Type something better :D</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={task.content}
            placeholder="Enter your password"
            name="desc"
            onChange={detectChangedesc}
          />
        </Form.Group>
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
