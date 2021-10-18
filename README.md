Application - **MyTeam**

- [Ссылка на проект](https://vercel.com/)

**Stack:**
- NextJS + typeScript
- Contexful
- Formik
- tsoa
- ExpressJS
- OpenAPI 3.0

### Three-page application
**Page 1 (About the company)**  
Information about the company, what it does  
Information is requested (using Contentful)  

**Page 2 (Company employees)**  
List of employees (names, positions).  
Positions can be edited, deleted  
The information is requested from the local server  

**Page 3 (Add a new employee)**  
Form for adding a new employee  
The information is sent to the local server  

### Tasks (Pull request):  
**1. Create Page 1 (About the company)**  
-connect Contentful  
**2. Create Page 2 (Company Employees)**  
-mock data  
-display them in the table  
**3. Create Page 3 (Add a new employee)**  
-add a form (formik)  
**4. Write a local server**  
-data array  
-set up auto-documentation  
**5. Receive data from the local server to Page 2 (Company employees)**  
-request to the server to receive, change data  
**6. Send data to the local server from Page 3 (Add a new employee)**  
-request to the server to add data
