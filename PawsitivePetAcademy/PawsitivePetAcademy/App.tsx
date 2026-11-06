
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

// Names of the application screens
type Page =
  | "Welcome"
  | "Home"
  | "About"
  | "Courses"
  | "CourseDetail"
  | "SelectCourses"
  | "MySelection"
  | "Fees"
  | "RequestQuote"
  | "Enquiry"
  | "Contact"
  | "Confirmation";

// Button component
type ButtonProps = {
  title: string;
  onPress: () => void;
  gold?: boolean;
};

function AppButton({
  title,
  onPress,
  gold = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        gold && styles.goldButton,
      ]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

// Text input component
type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
};

function FormInput({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  multiline = false,
}: InputProps) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          multiline && styles.messageInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholder={"Enter " + label.toLowerCase()}
        placeholderTextColor="#777777"
        autoCapitalize={
          keyboardType === "email-address"
            ? "none"
            : "sentences"
        }
        textAlignVertical="top"
      />
    </View>
  );
}

export default function App() {
  // Application variables
  const [currentPage, setCurrentPage] =
    useState<Page>("Welcome");

  const [selectedIds, setSelectedIds] =
    useState<string[]>([]);

  const [selectedCourse, setSelectedCourse] =
    useState<Course | null>(null);

  // Customer information
  const [strName, setStrName] = useState("");
  const [strEmail, setStrEmail] = useState("");
  const [strPhone, setStrPhone] = useState("");
  const [strMessage, setStrMessage] = useState("");
  const [strEnquiryType, setStrEnquiryType] = useState("");

  const [strConfirmation, setStrConfirmation] =
    useState("");

  // Change between screens
  function navigate(page: Page) {
    setCurrentPage(page);
  }

