//jshint esversion:8

import { isBDay } from "./ext/openDate.js";
import { animate } from "./animation.js";

/******************************************************* SETUP ************************************************************/

if (process.env.OPEN_DATE) {
  const status = isBDay();
  if (status === "IS_EARLY") animate();
  if (status === "IS_LATE") animate();
  if (status === "ON_TIME") animate();
} else {
  animate();
}
