import React, { useContext, useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  set,
  remove,
} from "firebase/database";
import { database } from "../firebase";
import { uid } from "uid";
