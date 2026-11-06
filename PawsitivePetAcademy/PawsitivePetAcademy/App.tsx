
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  KeyboardTypeOptions,
} from "react-native";

import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

// The colours from WIL Part 1
const COLORS = {
  forest: "#1B4D35",
  olive: "#6F963E",
  cream: "#F7F1DF",
  gold: "#D9A43A",
  brown: "#332A1F",
  white: "#FFFFFF",
};

// Course data type
type Course = {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  topics: string[];
};

