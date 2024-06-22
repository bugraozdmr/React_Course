import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export const LessonCheckbox = () => {
  const [value, setValue] = useState<string>("");
  const [isAccept, setIsAccept] = useState<boolean>(true);
  const [knowing, setKnowing] = useState<Array<string>>([]);

  console.log(knowing);


  const handleAcceptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAccept(e.target.checked);
    console.log(isAccept);
  };

  const handleKnowing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowing.indexOf(e.target.value);
    
    if(index === -1){
        setKnowing([...knowing,e.target.value]);
    }
    else{
        // varsa silmek istiyor
        setKnowing(knowing.filter((value) => {
            return value !== e.target.value;
        }));
    }
  };

  

  return (
    <div>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>educational background</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="warning" />}
                label="Primary School"
                disabled
              />
              <FormControlLabel
                control={<Checkbox color="warning" defaultChecked />}
                label="High School"
              />
              <FormControlLabel
                control={<Checkbox color="warning" />}
                label="University"
              />
            </FormGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="warning" checked={isAccept} />}
                label="I accept terms of use"
                checked={isAccept}
                onChange={handleAcceptChange}
              />
            </FormGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Which ones you know ?</FormLabel>
            <FormGroup row>
              <FormControlLabel
                value={"react"}
                control={<Checkbox color="warning" checked={knowing.includes('react')} />}
                label="React.js"
                onChange={handleKnowing}
              />
              <FormControlLabel
                value={"asp"}
                control={<Checkbox color="warning" checked={knowing.includes('asp')} />}
                label="Asp.net"
                onChange={handleKnowing}
              />
              <FormControlLabel
                value={"python"}
                control={<Checkbox color="warning" checked={knowing.includes('python')} />}
                label="Python"
                onChange={handleKnowing}
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};
