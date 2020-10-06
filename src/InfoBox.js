import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, total, isRed, active, ...props }) {
  return (
    <div className="infoBox">
      <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
      >
        <CardContent>
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>
          <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>
            Update:{cases}
          </h2>
          <Typography className="infoBox_total" color="textSecondary">
            Total:{total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
