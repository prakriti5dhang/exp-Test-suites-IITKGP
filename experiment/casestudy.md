## Case Study

**A Library Information System for SE VLabs Institute**

The SE VLabs Institute has been recently setup to provide state-of-the-art research facilities in the field of Software Engineering. Apart from research scholars (students) and professors, it also includes quite a large number of employees who work on different projects undertaken by the institution.

As the size and capacity of the institute is increasing with the time, it has been proposed to develop a Library Information System (LIS) for the benefit of students and employees of the institute. LIS will enable the members to borrow a book (or return it) with ease while sitting at his desk/chamber. The system also enables a member to extend the date of his borrowing if no other booking for that particular book has been made. For the library staff, this system aids them to easily handle day-to-day book transactions. The librarian, who has administrative privileges and complete control over the system, can enter a new record into the system when a new book has been purchased, or remove a record in case any book is taken off the shelf. Any non-member is free to use this system to browse/search books online. However, issuing or returning books is restricted to valid users (members) of LIS only.

The final deliverable would a web application, which should run only within the institute LAN. Although this reduces security risk of the software to a large extent, care should be taken no confidential information (eg., passwords) is stored in plain text.



As already discussed under the theory section, test case preparation could begin right after requirements identification stage. It is desirable (and advisable) to create a Requirements Traceability Matrix (RTM) showing a mapping from individual requirement to test case(s). A simplified form of the RTM is shown in table 1 (the numbers shown in this table are arbitrary; not specific to LIS).

Table 1: A simplified mapping from requirements to test cases
Requirement # |	Test Case #
:--|:--|
R1|	TC1
R2|	TC2, TC3, TC4
R3|TC5
R4|	TC6

Table 1 states which test case should help us to verify that a specified feature has been implemented and working correctly. For instance, if test case # TC6 fails, that would indicate requirement # R4 has not fully realized yet. Note that it is possible that a particular requirement might need multiple test cases to verify whether it has been implemented correctly.

To be specific to our problem, let us see how we can design test cases to verify the "User Login" feature. The simplest scenario is when both user name and password have been typed in correctly. The outcome will be that the user could then avail all features of LIS. However, there could be multiple unsuccessful conditions:

- User ID is wrong
- Password is wrong
- User ID & password are wrong
- Wrong password given twice consecutively
- Wrong password given thrice consecutively
- Wrong password given thrice consecutively, and security question answered correctly
- Wrong password given thrice consecutively, and security question answered incorrectly

We would create test case for the above stated login scenarios. These test cases together would constitute a test suite to verify the concerned requirement. Table 2 shows the details of this test suite.

Table 2: A test suite to verify the "User Login" feature
\#	|TS1
:--|:--|
**Title**| 	Verify "User Login" functionality
**Description**	|To test the different scenarios that might arise while an user is trying to login

\#|	Summary	|Dependency	|Pre-condition	|Post-condition	|Execution Steps	|Expected Output
:--|:--|:--|:--|:--|:--|:--|
TC1	|Verify that user already registered with the LIS is able to login with correct user ID and password| |Employee ID 149405 is a registered user of LIS; user's password is this_is_password|	User is logged in	| Type in employee ID as 149405, Type in password this_is_password,  Click on the 'Login' button| "Home" page for the user is displayed
TC2|Verify that an unregistered user of LIS is unable to login||Employee ID 149405xx is not a registered user of LIS|User is not logged in|	Type in employee ID as 149405xx, Type in password whatever, Click on the 'Login' button|The "Login" dialog is shown with a "Login failed! Check your user ID and password" message
TC3|Verify that user already registered with the LIS is unable to login with incorrect password||Employee ID 149405 is a registered user of LIS; user's password is this_is_password|User is not logged in| Type in employee ID as 149405, Type in password whatever, Click on the 'Login' button|The "Login" dialog is shown with a "Login failed! Check your user ID and password" message
TC4|Verify that user already registered with the LIS is unable to login with incorrect password given twice consecutively|TC3|This test case is executed after execution of TC3 before executing any other test case|User is not logged in| Type in employee ID as 149405, Type in password whatever2, Click on the 'Login' button|The "Login" dialog is shown with a "Login failed! Check your user ID and password" message
TC5|Verify that user already registered with the LIS is unable to login with incorrect password given thrice consecutively|TC4|This test case is executed after execution of TC4 before executing any other test case|User is not logged in| Type in employee ID as 149405, Type in password whatever3, Click on the 'Login' button|The "Login" dialog is shown with a "Login failed! Check your user ID and password" message; the security question and input box for the answer are displayed
TC6	|Verify that a registered user can login after three consecutive failures by correctly answering the security question|TC5|This test case is executed after execution of TC6 before executing any other test case. Answer to the security question is my_answer.|Email sent containing new password. The email is expected to be received within 2 minute.| Type in the answer as my_answer, Click on the 'Email Password' button|Login dialog is displayed; an email containing the new password is received
TC7|Verify that a registered user's account is blocked after three consecutive failures and answering the security question incorrectly||Execute the test cases TC3, TC4, and TC5 once again (in order) before executing this test case|User account has been blocked| Type in the answer as not_my_answer, Click on the 'Email Password' button|The message "Your account has been blocked! Please contact the administrator." appears

In a similar way, test suites corresponding to other user requirements could be created as well. A good test plan can reduce the burden of testing team by specifying what exactly they should focus on.