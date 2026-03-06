# 🚀 Backend Learning – Express Middleware

Hi, I’m Sangharsh 👋  
Today I learned about Middleware in Express.js and how middleware works in the request–response cycle.

--------------------------------------------------

📌 Topic  
Express.js Middleware

Middleware functions execute between receiving a request and sending a response in an Express application. They have access to the request object (req), response object (res), and the next() function.

The next() function passes control to the next middleware or route handler.

--------------------------------------------------

🧠 What I Learned

1️⃣ What is Middleware

Middleware is a function that runs before the final response is sent to the client. It can process requests, check data, log information, or stop the request if necessary.

--------------------------------------------------

2️⃣ Using app.use()

app.use() is used to run middleware for every incoming request. It can be used for logging, authentication, or request processing.

--------------------------------------------------

3️⃣ Route Specific Middleware

Middleware can also be applied to specific routes only. For example, middleware can run only when a user visits the /random route.

--------------------------------------------------

4️⃣ Custom Middleware (Token Verification)

I created a middleware that checks a token from the query string.  
If the token matches a specific value, the request is allowed.  
If the token is incorrect, an error is thrown and access is denied.

--------------------------------------------------

5️⃣ Logger Middleware

Middleware can also log request information such as:

• HTTP Method  
• Hostname  
• Request Path  
• Request Time  

This helps developers debug and monitor server activity.

--------------------------------------------------

6️⃣ Error Handling

If the token is incorrect, the middleware throws an error like “Access Denied”. This stops the request from continuing.

--------------------------------------------------

7️⃣ 404 Middleware

At the end of the application, a 404 middleware is used. If a route does not exist, the server returns a "Error 404" response.

--------------------------------------------------


🛠️ Concepts Practiced

• Express Middleware  
• app.use()  
• Route specific middleware  
• Custom middleware  
• Query parameters  
• Logger middleware  
• Error handling  
• 404 handling

--------------------------------------------------

🎯 Summary

Today I learned how middleware controls the flow of requests in an Express.js application.

Middleware is very important for building real-world backend applications because it helps with authentication, logging, security checks, validation, and error handling.

Understanding middleware is a key step in learning backend development with Express.js.

--------------------------------------------------

⭐ Topic Completed: Express Middleware
