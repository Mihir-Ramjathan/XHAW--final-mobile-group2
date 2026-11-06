
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

  // Format the price
  function money(amount: number) {
    return "R" + amount.toFixed(2);
  }

  // Get selected courses
  function selectedCourses() {
    return COURSES.filter((course) =>
      selectedIds.includes(course.id)
    );
  }

  // Add or remove a course
  function toggleCourse(courseId: string) {
    if (selectedIds.includes(courseId)) {
      setSelectedIds(
        selectedIds.filter((id) => id !== courseId)
      );
    } else {
      setSelectedIds([...selectedIds, courseId]);
    }
  }

  // Calculate fees and discounts
  function calculation() {
    const courses = selectedCourses();

    const intCount = courses.length;

    const fltSubtotal = courses.reduce(
      (total, course) => total + course.price,
      0
    );

    let fltDiscountRate = 0;

    if (intCount >= 4) {
      fltDiscountRate = 0.15;
    } else if (intCount === 3) {
      fltDiscountRate = 0.10;
    } else if (intCount === 2) {
      fltDiscountRate = 0.05;
    }

    const fltDiscount =
      fltSubtotal * fltDiscountRate;

    const fltTotal =
      fltSubtotal - fltDiscount;

    return {
      courses,
      intCount,
      fltSubtotal,
      fltDiscountRate,
      fltDiscount,
      fltTotal,
    };
  }

  // Check course selection
  function requireSelection(nextPage: Page) {
    if (selectedIds.length === 0) {
      Alert.alert(
        "No Courses Selected",
        "Please select at least one course."
      );
      return;
    }

    navigate(nextPage);
  }

  // Check customer details
  function validateForm() {
    if (strName.trim().length < 2) {
      Alert.alert(
        "Invalid Name",
        "Please enter your full name."
      );
      return false;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(strEmail.trim())) {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email address."
      );
      return false;
    }

    const phonePattern =
      /^[0-9+\s()-]{9,20}$/;

    if (!phonePattern.test(strPhone.trim())) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid phone number."
      );
      return false;
    }

    if (strMessage.trim().length < 10) {
      Alert.alert(
        "Invalid Message",
        "Please enter at least 10 characters."
      );
      return false;
    }

    return true;
  }

  // Clear the customer form
  function clearForm() {
    setStrName("");
    setStrEmail("");
    setStrPhone("");
    setStrMessage("");
    setStrEnquiryType("");
  }

  // Quote request
  function submitQuote() {
    if (selectedIds.length === 0) {
      Alert.alert(
        "Error",
        "Please select a course first."
      );
      return;
    }

    if (!validateForm()) {
      return;
    }

    const fees = calculation();

    setStrConfirmation(
      "Customer: " + strName + "\n\n" +
      "Courses Selected: " + fees.intCount + "\n" +
      "Subtotal: " + money(fees.fltSubtotal) + "\n" +
      "Discount: " +
      fees.fltDiscountRate * 100 + "%\n" +
      "You Save: " + money(fees.fltDiscount) + "\n\n" +
      "Final Total: " + money(fees.fltTotal) +
      "\n\nThis is a demonstration quotation. " +
      "It has not been sent to the academy."
    );

    clearForm();
    navigate("Confirmation");
  }

  // Enquiry request
  function submitEnquiry() {
    if (strEnquiryType === "") {
      Alert.alert(
        "Error",
        "Please choose an enquiry type."
      );
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStrConfirmation(
      "Thank you, " + strName + "!\n\n" +
      "Your " + strEnquiryType.toLowerCase() +
      " enquiry has been completed in this demonstration.\n\n" +
      "It has not been sent to the academy."
    );

    clearForm();
    navigate("Confirmation");
  }

  // Customer form used on two screens
  function customerForm(isQuote: boolean) {
    return (
      <View style={styles.card}>
        <FormInput
          label="Full Name"
          value={strName}
          onChangeText={setStrName}
        />

        <FormInput
          label="Email Address"
          value={strEmail}
          onChangeText={setStrEmail}
          keyboardType="email-address"
        />

        <FormInput
          label="Phone Number"
          value={strPhone}
          onChangeText={setStrPhone}
          keyboardType="phone-pad"
        />

        {!isQuote && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Enquiry Type
            </Text>

            {[
              "General",
              "Courses",
              "Fees",
              "Other",
            ].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.option,
                  strEnquiryType === type &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setStrEnquiryType(type)
                }
              >
                <Text>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <FormInput
          label="Message"
          value={strMessage}
          onChangeText={setStrMessage}
          multiline
        />

        <AppButton
          title={
            isQuote
              ? "Submit Quote Request"
              : "Send Enquiry"
          }
          onPress={
            isQuote
              ? submitQuote
              : submitEnquiry
          }
        />
      </View>
    );
  }

  // Course card
  function courseCard(course: Course) {
    const blnSelected =
      selectedIds.includes(course.id);

    return (
      <View style={styles.card} key={course.id}>
        <Text style={styles.cardTitle}>
          {course.name}
        </Text>

        <Text style={styles.description}>
          {course.description}
        </Text>

        <Text>
          Duration: {course.duration}
        </Text>

        <Text style={styles.price}>
          {money(course.price)}
        </Text>

        <AppButton
          title="View Details"
          onPress={() => {
            setSelectedCourse(course);
            navigate("CourseDetail");
          }}
        />

        <AppButton
          title={
            blnSelected
              ? "Remove Course"
              : "Select Course"
          }
          gold
          onPress={() => toggleCourse(course.id)}
        />
      </View>
    );
  }

  // Render the correct screen
  function renderPage() {
    const fees = calculation();

    // 1. Welcome Screen
    if (currentPage === "Welcome") {
      return (
        <View style={styles.center}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.welcomeLogo}
            resizeMode="contain"
          />

          <Text style={styles.heading}>
            Welcome to Pawsitive Pet Academy
          </Text>

          <Text style={styles.description}>
            Learn • Train • Care
          </Text>

          <Text style={styles.description}>
            Pet care education and practical
            animal training in Durban.
          </Text>

          <AppButton
            title="Get Started"
            onPress={() => navigate("Home")}
          />
        </View>
      );
    }

    // 2. Home Screen
    if (currentPage === "Home") {
      return (
        <View>
          <Text style={styles.heading}>
            Pawsitive Pet Academy
          </Text>

          <Text style={styles.description}>
            Welcome to our pet care and training academy.
            Learn the skills needed to care for animals.
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Our Programmes
            </Text>

            <Text>
              4 Professional Development Programmes
            </Text>

            <Text>
              3 Practical Skills Courses
            </Text>

            <Text style={styles.smallText}>
              Choose more courses to receive a discount.
            </Text>
          </View>

          <AppButton
            title="Browse Courses"
            onPress={() => navigate("Courses")}
          />

          <AppButton
            title="About Us"
            gold
            onPress={() => navigate("About")}
          />

          <AppButton
            title="Send Enquiry"
            onPress={() => navigate("Enquiry")}
          />
        </View>
      );
    }

    // 3. About Screen
    if (currentPage === "About") {
      return (
        <View>
          <Text style={styles.heading}>
            About Us
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Our Story
            </Text>

            <Text style={styles.description}>
              Pawsitive Pet Academy was established
              in 2023 by Sarah Smith in Durban.
            </Text>

            <Text style={styles.description}>
              We offer pet care education and practical
              animal training for pet owners, families
              and aspiring pet professionals.
            </Text>

            <Text style={styles.description}>
              Our goal is to improve animal wellbeing
              and create employment opportunities
              in the pet care industry.
            </Text>
          </View>

          <AppButton
            title="View Courses"
            onPress={() => navigate("Courses")}
          />
        </View>
      );
    }

    // 4. Courses Screen
    if (currentPage === "Courses") {
      return (
        <View>
          <Text style={styles.heading}>
            Our Courses
          </Text>

          <Text style={styles.sectionTitle}>
            Professional Development Programmes
          </Text>

          {COURSES.filter(
            (course) => course.price === 1500
          ).map((course) => courseCard(course))}

          <Text style={styles.sectionTitle}>
            Practical Skills Courses
          </Text>

          {COURSES.filter(
            (course) => course.price === 750
          ).map((course) => courseCard(course))}

          <AppButton
            title="Continue to Selection"
            onPress={() =>
              navigate("SelectCourses")
            }
          />
        </View>
      );
    }

    // 5. Course Detail Screen
    if (currentPage === "CourseDetail") {
      if (selectedCourse === null) {
        return (
          <View>
            <Text style={styles.heading}>
              Course Not Found
            </Text>

            <AppButton
              title="Back to Courses"
              onPress={() => navigate("Courses")}
            />
          </View>
        );
      }

      return (
        <View>
          <Text style={styles.heading}>
            {selectedCourse.name}
          </Text>

          <View style={styles.card}>
            <Text style={styles.description}>
              {selectedCourse.description}
            </Text>

            <Text style={styles.cardTitle}>
              Course Content
            </Text>

            {selectedCourse.topics.map(
              (topic, index) => (
                <Text
                  key={index}
                  style={styles.listText}
                >
                  • {topic}
                </Text>
              )
            )}

            <Text style={styles.smallText}>
              Duration: {selectedCourse.duration}
            </Text>

            <Text style={styles.price}>
              {money(selectedCourse.price)}
            </Text>

            <AppButton
              title={
                selectedIds.includes(selectedCourse.id)
                  ? "Remove Course"
                  : "Select Course"
              }
              onPress={() =>
                toggleCourse(selectedCourse.id)
              }
            />

            <AppButton
              title="Back to Courses"
              gold
              onPress={() => navigate("Courses")}
            />
          </View>
        </View>
      );
    }

    // 6. Select Courses Screen
    if (currentPage === "SelectCourses") {
      return (
        <View>
          <Text style={styles.heading}>
            Select Courses
          </Text>

          <Text style={styles.description}>
            Select one or more courses.
          </Text>

          {COURSES.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={[
                styles.selectionCard,
                selectedIds.includes(course.id) &&
                  styles.selectedCard,
              ]}
              onPress={() =>
                toggleCourse(course.id)
              }
            >
              <Text style={styles.cardTitle}>
                {selectedIds.includes(course.id)
                  ? "☑ "
                  : "☐ "}
                {course.name}
              </Text>

              <Text>{money(course.price)}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.card}>
            <Text>
              Selected Courses: {fees.intCount}
            </Text>

            <Text style={styles.price}>
              Total: {money(fees.fltTotal)}
            </Text>
          </View>

          <AppButton
            title="Continue"
            onPress={() =>
              requireSelection("MySelection")
            }
          />
        </View>
      );
    }

    // 7. My Selection Screen
    if (currentPage === "MySelection") {
      return (
        <View>
          <Text style={styles.heading}>
            My Selection
          </Text>

          {fees.courses.length === 0 && (
            <Text>
              No courses selected.
            </Text>
          )}

          {fees.courses.map((course) => (
            <View
              style={styles.card}
              key={course.id}
            >
              <Text style={styles.cardTitle}>
                {course.name}
              </Text>

              <Text>
                {money(course.price)}
              </Text>

              <AppButton
                title="Remove Course"
                onPress={() =>
                  toggleCourse(course.id)
                }
              />
            </View>
          ))}

          <AppButton
            title="Calculate Fees"
            onPress={() =>
              requireSelection("Fees")
            }
          />

          <AppButton
            title="Add More Courses"
            gold
            onPress={() =>
              navigate("SelectCourses")
            }
          />
        </View>
      );
    }

    // 8. Fees Screen
    if (currentPage === "Fees") {
      return (
        <View>
          <Text style={styles.heading}>
            Course Fees
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Quotation Summary
            </Text>

            {fees.courses.map((course) => (
              <View
                key={course.id}
                style={styles.summaryRow}
              >
                <Text style={styles.summaryName}>
                  {course.name}
                </Text>

                <Text>
                  {money(course.price)}
                </Text>
              </View>
            ))}

            <View style={styles.divider} />

            <Text style={styles.summaryText}>
              Courses: {fees.intCount}
            </Text>

            <Text style={styles.summaryText}>
              Subtotal: {money(fees.fltSubtotal)}
            </Text>

            <Text style={styles.summaryText}>
              Discount: {fees.fltDiscountRate * 100}%
            </Text>

            <Text style={styles.summaryText}>
              You Save: {money(fees.fltDiscount)}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.total}>
              Total: {money(fees.fltTotal)}
            </Text>
          </View>

          <AppButton
            title="Request Quote"
            onPress={() =>
              requireSelection("RequestQuote")
            }
          />

          <AppButton
            title="Change Courses"
            gold
            onPress={() =>
              navigate("SelectCourses")
            }
          />
        </View>
      );
    }

    // 9. Request Quote Screen
    if (currentPage === "RequestQuote") {
      return (
        <View>
          <Text style={styles.heading}>
            Request a Quote
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Estimated Total
            </Text>

            <Text style={styles.total}>
              {money(fees.fltTotal)}
            </Text>

            <Text>
              {fees.intCount} course(s) selected
            </Text>
          </View>

          {customerForm(true)}
        </View>
      );
    }

    // 10. Enquiry Screen
    if (currentPage === "Enquiry") {
      return (
        <View>
          <Text style={styles.heading}>
            Enquiry Form
          </Text>

          <Text style={styles.description}>
            Complete the form below if you have
            questions about our courses.
          </Text>

          {customerForm(false)}
        </View>
      );
    }

    // 11. Contact Screen
    if (currentPage === "Contact") {
      return (
        <View>
          <Text style={styles.heading}>
            Contact Us
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Pawsitive Pet Academy
            </Text>

            <Text style={styles.description}>
              Durban, KwaZulu-Natal, South Africa
            </Text>

            <Text style={styles.description}>
              Founder: Sarah Smith
            </Text>

            <Text style={styles.description}>
              Established: 2023
            </Text>

            <Text style={styles.smallText}>
              Official contact details will be
              added when provided by the academy.
            </Text>
          </View>

          <AppButton
            title="Send Enquiry"
            onPress={() => navigate("Enquiry")}
          />
        </View>
      );
    }

    // 12. Confirmation Screen
    if (currentPage === "Confirmation") {
      return (
        <View style={styles.center}>
          <Text style={styles.successIcon}>
            ✓
          </Text>

          <Text style={styles.heading}>
            Request Completed
          </Text>

          <Text style={styles.description}>
            {strConfirmation}
          </Text>

          <AppButton
            title="Return Home"
            onPress={() => navigate("Home")}
          />
        </View>
      );
    }

    return null;
  }

  
