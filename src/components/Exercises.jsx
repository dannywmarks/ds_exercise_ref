import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from '../components'

import { fetchData, exerciseOptions } from "../utils/fetchData";

const Exercises = ({ setExercises, exercises, bodyPart }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="flex"
        justifyContent="center"
      >
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise}/>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
