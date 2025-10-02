# GEMINI Coding Guidelines

## 🎯 Goal
All code generated should be:
- Minimal and clean
- Well-structured
- Use concise variable names (without being cryptic)
- Contain only necessary comments (1-2 lines max where needed)
- Avoid redundant or clutter code

## 📝 Rules
1. Keep imports minimal, only what is required.
2. Use modern syntax (ES6+ for JS, f-strings for Python).
3. Write functions instead of long inline scripts.
4. No unnecessary console.logs/prints or boilerplate.
5. Code should be self-explanatory; comment only when logic isn’t obvious.
6. Prefer readability over "clever hacks".

## ✅ Example (Good JS)
```js
// Fetch data from API and log result
async function fetchData(url) {
  const res = await fetch(url);
  return res.json(); // returns parsed JSON
}

fetchData("https://api.example.com/data")
  .then(data => console.log(data));
```

## ❌ Example (Bad JS)
```js
// Unnecessary variables, comments and clutter
async function fetchData(url) {
  // Call API
  const response = await fetch(url); // fetching
  const json = await response.json(); // parsing
  console.log("Here is the data:", json); // debug
  return json;
}
```

---

## 🔑 TL;DR
- Minimal imports
- Concise, smart coding
- Few but meaningful comments
- No clutter code
