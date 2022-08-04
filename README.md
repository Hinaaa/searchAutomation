# searchAutomation
Sample automation for search page, as per requirement Wikipedia

**Pre requisites**
Node js -16.13.0 or any latest version
Visual Studio IDE  , to view the files

**Running test:**
 
 Install dependencies by running npm i
 
 Execute the below command
 
 npm run test
 #Cypress window will open, select the test case which need to be executed

**TestCases**

1. Search 'Apollo 11' and click search button and validate result
2. Search 'Apollo 11' and select from list
3. Search with similar incomplete text example search 'Apollo' instead of 'Apollo 11'
4. Search with text other than 'Apollo 11' Example 'Apollo 13'
5. Search without text, directly clicking search button
6. Search with wrong similar spelling like 'Apoolloo 11' instead of 'Apollo 11'

**Folder structure**

Cypress/integration-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this

cypress/pageobject-: The xpath are captured and placed

cypress/testdata-: The testdata which is passed to the spec file, the data was passed in json format

**Approaches and automation concept used**

1. UCentralized approach for reusability like centralized URL
2. Assertions has been placed for validation
3. Page object model approach used
4. Comments mentioned for better understanding
5. Maintainable and re-usable code

Choosing tech stack: Cypress has been used as its mentioned in recommendation for web automation, also I’m currently working on cypress in my current organization. Also I personally like workinng on it.
