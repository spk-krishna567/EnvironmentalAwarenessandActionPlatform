// src/components/InitiativeList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listInitiatives, joinInitiative } from "../actions/initiativeActions";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const InitiativeList = () => {
  const dispatch = useDispatch();

  const initiativeList = useSelector((state) => state.initiativeList);
  const { loading, error, initiatives } = initiativeList;

  useEffect(() => {
    dispatch(listInitiatives());
  }, [dispatch]);

  const handleJoin = (id) => {
    console.log("joined contest");
    dispatch(joinInitiative(id));
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Environmental Initiatives
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : initiatives && initiatives.length ? (
        <Grid container spacing={3}>
          {initiatives.map((initiative) => (
            <Grid item key={initiative._id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{initiative.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {initiative.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleJoin(initiative._id)}
                  >
                    Join
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No initiatives are taken.</Typography>
      )}
    </Box>
  );
};

export default InitiativeList;
