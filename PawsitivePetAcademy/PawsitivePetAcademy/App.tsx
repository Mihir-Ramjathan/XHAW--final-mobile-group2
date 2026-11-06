
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

// All seven courses from our scenario
const COURSES: Course[] = [
  {
    id: "obedience",
    name: "Canine Obedience Training",
    price: 1500,
    duration: "12 weeks",
    description: "Learn effective dog obedience and training techniques.",
    topics: [
      "Basic commands",
      "Leash training",
      "Behaviour correction",
      "Positive reinforcement",
      "Socialisation techniques",
    ],
  },
  {
    id: "grooming",
    name: "Pet Grooming",
    price: 1500,
    duration: "12 weeks",
    description: "Learn professional pet grooming skills.",
    topics: [
      "Coat care",
      "Bathing techniques",
      "Nail trimming",
      "Ear and eye cleaning",
      "Grooming equipment",
    ],
  },
  {
    id: "behaviour",
    name: "Animal Behaviour",
    price: 1500,
    duration: "12 weeks",
    description: "Understand pet behaviour and animal communication.",
    topics: [
      "Animal psychology",
      "Reading body language",
      "Stress management",
      "Behaviour modification",
      "Enrichment activities",
    ],
  },
  {
    id: "business",
    name: "Pet Business Management",
    price: 1500,
    duration: "12 weeks",
    description: "Learn how to operate a pet-related business.",
    topics: [
      "Customer service",
      "Marketing",
      "Business planning",
      "Financial management",
      "Legal requirements",
    ],
  },
  {
    id: "puppy",
    name: "Puppy Care",
    price: 750,
    duration: "6 weeks",
    description: "Learn essential puppy care skills.",
    topics: [
      "Feeding",
      "Vaccinations",
      "Toilet training",
      "Exercise",
      "Socialisation",
    ],
  },
  {
    id: "firstaid",
    name: "Pet First Aid",
    price: 750,
    duration: "6 weeks",
    description: "Learn emergency first aid for pets.",
    topics: [
      "Minor injuries",
      "CPR basics",
      "Poison awareness",
      "Heatstroke",
      "Emergency transport",
    ],
  },
  {
    id: "walking",
    name: "Basic Dog Walking",
    price: 750,
    duration: "6 weeks",
    description: "Learn safe dog walking practices.",
    topics: [
      "Walking equipment",
      "Handling multiple dogs",
      "Safety procedures",
      "Exercise routines",
    ],
  },
];

