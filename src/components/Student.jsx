import {
  Autocomplete,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/store";

export default () => {
  const state = useSelector((state) => state);
  const allCalss = ["Six", "Seven", "Eight", "Nine", "Ten"];
  const dispatch = useDispatch();

  const addStudent = (e) => {
    e.preventDefault();
    dispatch(
      action.updatedStudent({
        name: e.target.name.value,
        class: e.target.class.value,
        roll: e.target.roll.value,
        subject: e.target.subject.value,
      })
    );
  };

  return (
    <div className="student">
      <div className="studentForm">
        <h2>Student Form</h2>
        <form onSubmit={(e) => addStudent(e)}>
          <div className="text-field">
            <div>
              <TextField
                fullWidth
                id="fullWidth"
                name="name"
                label="Student Name"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="fullWidth"
                name="roll"
                label="Student Roll"
                variant="standard"
              />
            </div>
          </div>
          <div className="text-field">
            <div>
              <Autocomplete
                options={allCalss}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField name="class" {...params} label="Class" />
                )}
              />
            </div>
            <div>
              {" "}
              <FormLabel id="subject">Subject</FormLabel>
              <RadioGroup
                row
                className="subject"
                label="subject"
                name="subject"
                aria-labelledby="subject"
              >
                <FormControlLabel
                  value="Science"
                  control={<Radio />}
                  label="Science"
                />
                <FormControlLabel
                  value="commerce"
                  control={<Radio />}
                  label="commerce"
                />
                <FormControlLabel
                  value="arts"
                  control={<Radio />}
                  label="arts"
                />
              </RadioGroup>
            </div>
          </div>
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
      <div className="studentInfo">
        <h2>student info</h2>
        <div>
          <span>
            name: <h3>{state.student.name}</h3>
          </span>
          <span>
            class: <h3>{state.student.class}</h3>
          </span>
        </div>
        <div>
          <span>
            roll: <h3>{state.student.roll}</h3>
          </span>
          <span>
            subject: <h3>{state.student.subject}</h3>
          </span>
        </div>
      </div>
    </div>
  );
};
