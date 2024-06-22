import { FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { blue, pink } from "@mui/material/colors";
import React, { useState } from "react";

export const LessonRadioGroup = () => {
    const [salary,setSalary] = useState<string>('');



  return (
    <div>
      <FormLabel>Salary expectation</FormLabel>
      <RadioGroup row name="expected-salary" value={salary} onChange={(e) => {
        setSalary(e.target.value);
      }}>
        <FormControlLabel
          label="2000$"
          value="2000"
          control={
            <Radio
              sx={{
                color: blue[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
        />

        <FormControlLabel
          label="1000$"
          value="1000"
          control={
            <Radio
              sx={{
                color: blue[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
        />

        <FormControlLabel
          label="3000$"
          value="3000"
          control={
            <Radio
              sx={{
                color: blue[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
        />
        
      </RadioGroup>
      <FormHelperText>Helper</FormHelperText>
    </div>
  );
};
