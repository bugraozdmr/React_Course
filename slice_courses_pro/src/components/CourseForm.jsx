import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { changeCost, changeDesc, changeName } from "../store/slices/FormSlice";
import { addCourse } from "../store/slices/CourseSlice"; 

export const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    //console.log(state)
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (e) => {
    dispatch(addCourse({name,description,cost}));

    e.preventDefault();
  }

  return (
    <div>
      <form>
        <TextField
          label="Name"
          color="secondary"
          id="standard-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
          value={name}
          onChange={(event) => {
            dispatch(changeName(event.target.value));
          }}
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            id="standard-adornment-weight"
            color="secondary"
            value={description}
            aria-describedby="standard-weight-helper-text"
            onChange={(event) => {
              dispatch(changeDesc(event.target.value));
            }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Description
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Cost</InputLabel>
          <OutlinedInput
            color="secondary"
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">TL</InputAdornment>
            }
            label="Amount"
            type="number"
            value={cost}
            onChange={(event) => {
              dispatch(changeCost(parseInt(event.target.value)));
            }}
          />
        </FormControl>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          onClick={handleSubmit}
          sx={{ marginTop: "1.2rem" }}
        >
          Save
        </Button>
      </form>
    </div>
  );
};
