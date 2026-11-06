# Pawsitive Pet Academy – Mobile Application

## 1. Project Overview

Pawsitive Pet Academy is a pet care education and animal training business established by Sarah Smith in Durban in 2023.

This mobile application was created as part of our Work Integrated Learning (WIL) group project.

The purpose of the application is to help customers learn about the academy, view available courses, select courses, calculate fees and request more information.

The application was developed using React Native, TypeScript and Expo.

## 2. Project Objectives

The main objectives of the mobile application are to:

- Provide information about Pawsitive Pet Academy.
- Display the available pet care and training courses.
- Allow customers to select and remove courses.
- Calculate course fees and discounts automatically.
- Allow customers to request quotations.
- Provide an enquiry form and contact information.
- Make the application simple and easy to use.

## 3. Technologies Used

**React Native**

React Native was used to create the mobile application's interface, including text, buttons, images, forms and navigation.

**TypeScript**

TypeScript was used to write the application logic, organise information and define data types.

**Expo**

Expo was used to create, run and test the React Native application.

**Visual Studio Code**

Visual Studio Code was used to write and edit the application code.

**Figma**

Figma was used to plan and design the mobile application wireframes.

**GitHub**

GitHub was used to store the project files and support group collaboration.

## 4. Application Screens

The mobile application includes 12 screens:

1. Welcome – Introduces Pawsitive Pet Academy.
2. Home – Displays the main information about the academy.
3. About Us – Explains the academy's background and purpose.
4. Courses – Displays all available courses.
5. Course Details – Provides information about individual courses.
6. Select Courses – Allows customers to choose courses.
7. My Selection – Displays the selected courses.
8. Fees – Calculates course fees and discounts.
9. Request Quote – Allows customers to complete a quotation request.
10. Enquiry – Allows customers to ask questions.
11. Contact Us – Provides information about the academy.
12. Confirmation – Displays a message after completing a form.

## 5. Available Courses

The academy offers seven courses.

**12-week courses – R1,500 each:**
- Canine Obedience Training
- Pet Grooming
- Animal Behaviour
- Pet Business Management

**6-week courses – R750 each:**
- Puppy Care
- Pet First Aid
- Basic Dog Walking

## 6. Course Discount System

The application automatically calculates discounts based on how many courses are selected.

| Number of Courses | Discount |
|---|---|
| 1 course | 0% |
| 2 courses | 5% |
| 3 courses | 10% |
| 4 or more courses | 15% |

**Example:**

If a customer selects two courses costing R1,500 each:

- Subtotal: R3,000
- Discount: 5%
- Discount amount: R150
- Final total: R2,850

Customers can view the calculated total before requesting a quotation.

## 7. Application Design

The application follows a user-centred design approach.

This means the design focuses on making the application easy for customers to understand and use.

The main design features include:

- Simple navigation between screens.
- Clear buttons and headings.
- Readable text.
- Organised course information.
- Consistent colours and styling.
- Easy-to-use forms.

### Colour Palette

| Colour | Hex Code |
|---|---|
| Forest Green | #1B4D35 |
| Olive Green | #6F963E |
| Warm Cream | #F7F1DF |
| Soft Gold | #D9A43A |
| Dark Brown | #332A1F |

These colours were chosen to create a friendly and professional appearance that matches the academy's identity.

## 8. Project Structure

The main project files include:

- `App.tsx` – Contains the application screens, navigation and functionality.
- `assets/logo.png` – Contains the Pawsitive Pet Academy logo.
- `app.json` – Contains the Expo application settings.
- `package.json` – Contains project dependencies and scripts.
- `README.md` – Explains the project.

## 9. How to Run the Application

1. Install Node.js and Visual Studio Code.
2. Download or clone the GitHub repository.
3. Open the project folder in Visual Studio Code.
4. Open the VS Code terminal.
5. Install the project dependencies:

   `npm install`

6. Start Expo:

   `npx expo start`

7. Press `w` in the terminal to open the application in Google Chrome.

The application can also be tested on a supported mobile device using Expo Go.

**Note:** The project must have the required Expo Web dependencies installed before running in Chrome.

## 10. Application Functionality

The application allows customers to browse available courses, view course descriptions and select multiple courses.

Customers can add or remove courses, and the application updates the fee calculation automatically.

The application also includes form validation to check information such as names, email addresses, phone numbers and messages.

After completing a valid form, the application displays a confirmation screen.

**Important:** The quotation and enquiry forms are demonstrations. They do not send information to the academy or store it in an online database.

## 11. Testing

The following features can be tested:

- The welcome screen displays correctly.
- Navigation buttons open the correct screens.
- Course information displays correctly.
- Courses can be added and removed.
- The discount calculation produces the correct results.
- Forms check that required information is entered.
- Confirmation messages display.
- The application opens in Google Chrome using Expo Web.

## 12. Project Limitations

The application is currently a student project.

It does not include online payments, customer accounts or a database.

Course selections are kept in the application's current state and may be lost when the application is restarted.

The quotation and enquiry forms are demonstrations and do not send actual requests to the academy.

## 13. Future Improvements

Possible future improvements include:

- Adding customer accounts.
- Connecting the application to a database.
- Allowing online course registration.
- Adding payment functionality.
- Sending email confirmations.
- Saving customer course selections.

## 14. Project Team

This mobile application was developed as part of a three-member WIL group project for the XHAW5112 module.

The project involved research, planning, interface design and application development.

## 15. References

Expo (n.d.) *Expo Documentation*. Available at: https://docs.expo.dev/ (Accessed: 6 November 2026).

Expo (n.d.) *Start Developing*. Available at: https://docs.expo.dev/get-started/start-developing/ (Accessed: 6 November 2026).

Expo (n.d.) *Develop Websites with Expo*. Available at: https://docs.expo.dev/workflow/web/ (Accessed: 6 November 2026).

Figma (n.d.) *Figma*. Available at: https://www.figma.com/ (Accessed: 6 November 2026).

GeeksforGeeks (n.d.) *React Native*. Available at: https://www.geeksforgeeks.org/react-native/ (Accessed: 6 November 2026).

Interaction Design Foundation (n.d.) *User-Centered Design (UCD)*. Available at: https://www.interaction-design.org/literature/topics/user-centered-design (Accessed: 6 November 2026).

Microsoft (n.d.) *The TypeScript Handbook*. Available at: https://www.typescriptlang.org/docs/handbook/intro.html (Accessed: 6 November 2026).

Microsoft (n.d.) *Visual Studio Code Documentation*. Available at: https://code.visualstudio.com/docs (Accessed: 6 November 2026).

Pawsitive Pet Academy Group (2026) *Pawsitive Pet Academy: Task 1 – Phase 3 (Group)*. Unpublished group assignment, XHAW5112.

Pawsitive Pet Academy Group (2026) *Pawsitive Pet Academy: Mobile Application Wireframes*. Unpublished group design project created using Figma.

Ramjathan, M. (2026) *Pawsitive Pet Academy: Task 1 – Phase 1 (Individual)*. Unpublished student assignment, XHAW5112.

React (n.d.) *useState*. Available at: https://react.dev/reference/react/useState (Accessed: 6 November 2026).

React Native (n.d.) *Core Components and APIs*. Available at: https://reactnative.dev/docs/components-and-apis (Accessed: 6 November 2026).

React Native (n.d.) *React Native Documentation*. Available at: https://reactnative.dev/docs/getting-started (Accessed: 6 November 2026).

Stack Overflow (n.d.) *React Native Questions*. Available at: https://stackoverflow.com/questions/tagged/react-native (Accessed: 6 November 2026).

Stack Overflow (n.d.) *Expo Questions*. Available at: https://stackoverflow.com/questions/tagged/expo (Accessed: 6 November 2026).

## 16. Conclusion

The Pawsitive Pet Academy mobile application was developed to make pet care course information easier to access.

It allows customers to browse courses, select courses, calculate fees and complete quotation or enquiry forms.

This project helped our group gain practical experience in React Native, TypeScript, Expo, mobile application design and teamwork.
