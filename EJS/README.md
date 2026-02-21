# Backend Learning – EJS Templating (Day 3)

This repository contains my backend learning practice focusing on **EJS (Embedded JavaScript Templates)**.  
Today I learned how to use EJS to create dynamic web pages with reusable templates and display JSON data in HTML.

---

## What I learned today

### Setting up EJS
- How to configure Express to use EJS as the view engine:
  ```js
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "/views"));

  ---

## Summary

Today I focused entirely on **EJS templating**. I learned how to:

- Render dynamic content in HTML using `<%= %>` and `<%- %>`.
- Include reusable templates like headers and footers with `<%- include() %>`.
- Loop through arrays and display JSON data dynamically.
- Conditionally render content (e.g., showing messages or error pages).
- Organize views and partials for better project structure.
- Build interactive pages like a dice roller and Instagram-like profile pages.
