import React from "react";
import { handleAuthentication } from "../utils/auth";

export default function Callback() {
  handleAuthentication();
  return <div>Loading</div>;
}
