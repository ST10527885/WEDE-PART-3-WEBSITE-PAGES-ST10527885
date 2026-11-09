# Kooking with Khwezi
 
**Module:** Web Development (Introduction) – WEDE5020
**Assessment:** Portfolio of Evidence (PoE), Parts 1 to 3
 
## Student Information
 
| | |
|---|---|
| **Full name** | Thandolwethu Mahlangu |
| **Student number** | ST10527885 |
| **Lecturer** | J.Sookha |
| **Live website** | [Deployed site link] |
 
---
 
## Project Overview
 
Kooking with Khwezi is an independent neighbourhood catering and baking business based at 66 Loop Street, CBD, Rustenburg, North West. The business is run by its founder and chef, Khwezi, who learnt to cook from her late mother and started the business after exploring cooking from scratch during the 2020 lockdown. It serves weddings, funerals, birthdays, corporate functions, private events and weekday meals (pickup or delivery).
 
This website is a responsive, multi-page site built with HTML, CSS and JavaScript only. It presents the business, its menus and services, and lets customers get an instant estimate or send a message.
 
**Mission:** To bring organic and fresh food to the community.
**Vision:** To become the town's go-to catering company and the leading independent catering company in South Africa within six years.
 
**Target audience:** Residents and businesses in Rustenburg and the surrounding North West area who are planning events or looking for weekday meals, on both mobile and desktop devices.
 
## Website Goals and Objectives
 
1. **Build credibility and brand identity** – present Khwezi's story, mission, vision and a gallery of real work.
2. **Generate enquiries** – make it easy to get an instant estimate (enquiry page) or send a message (contact page).
3. **Inform customers** – show menus, package prices and operating hours clearly so customers do not have to wait for a quotation.
4. **Be easy to find** – apply on-page SEO (titles, descriptions, keywords, headings, alt text) and local details.
5. **Work on every device** – responsive layout, navigation and images from small phones to desktop.

 
## Key Features and Functionality
 
- Seven linked pages with a consistent sticky header, navigation menu and footer.
- Sliding hero images on the home page (CSS animation, pauses on hover, respects reduced-motion settings).
- **Menu page:** menu items are loaded dynamically with JavaScript, with a **search box**, **category filter** and **sort** (name, price low to high, price high to low). "Price on request" items always sort last.
- **Gallery page:** image grid with an accessible **lightbox** (keyboard arrows, Escape to close, focus kept inside the viewer, previous/next buttons).
- **Services page:** service cards with starting prices and an **FAQ accordion** (one answer open at a time).
- **Enquiry page:** validated form that calculates an **instant estimate** and an **availability note** based on event type, guest count, extras and notice period, and lets the customer email the enquiry.
- **Contact page:** validated form that compiles the message into an email for the recipient set in the code, plus business details, a table of location details and an embedded Google Map.
- Embedded Google Map in every footer.
- Responsive images using `srcset`, `sizes`, `width`/`height` and lazy loading.
- Accessible touches: skip-free semantic structure, `aria-current`, `aria-live` result panel, labelled form controls, visible focus styles and error messages announced with `role="alert"`.
## Sitemap
 
```
Home (index.html)
├── About (Pages/about.html)
├── Menus (Pages/menu.html)
├── Gallery (Pages/gallery.html)
├── Services (Pages/services.html)    
├── Enquiry (Pages/enquiry.html)
└── Contact Us (Pages/contact.html)
```
 
## File and Folder Structure
 
```
/ (root)
├── index.html
├── README.md
├── robots.txt         (crawler instructions)
├── sitemap.xml        (list of all pages for search engines)
├── Pages/
│   ├── about.html
│   ├── menu.html
│   ├── gallery.html
│   ├── services.html
│   ├── enquiry.html
│   └── contact.html
├── Styles/
│   └── styles.css
├── Scripts/
│   ├── main.js        (footer year)
│   ├── menu.js        (dynamic menu, search, filter, sort)
│   ├── gallery.js     (lightbox)
│   ├── services.js    (FAQ accordion)
│   ├── enquiry.js     (enquiry validation, estimate, availability)
│   └── contact.js     (contact validation and email)
└── Assets/
    └── images/        (logo, hero images, menu and gallery photos in 400px, 800px and 1920px versions)
```
 
## Design
 
| Item | Choice |
|---|---|
| **Colour palette** | Ink `#1A1512`, Rose `#D6336C`, Rose dark `#A8234F`, Gold `#C9A227`, Blush `#F7E9E3`, Ivory `#FBF6F0` (stored as CSS variables in `:root`) |
| **Headings font** | Playfair Display (Google Fonts), serif fallback Georgia |
| **Body font** | Lato (Google Fonts), fallback Arial/sans-serif |
| **Type scale** | Fluid sizes using `clamp()` for body text, `h1`, `h2` and `h3` |

| **Style** | Dark header and footer, warm ivory background, rounded cards with soft shadows, gold accent underlines on `h2` headings |
 
## Timeline and Milestones
 
| Milestone | Target date | Status |
|---|---|---|
| Part 1 – proposals, content research, sitemap, HTML structure, GitHub repository | Complete |
| Part 2 – external stylesheet, responsive design, Part 1 feedback changes | Complete |
| Part 3 – JavaScript features, SEO, forms and validation, deployment, Part 2 feedback changes | Complete |
 
---
 
## Part 1 Details – Building the Foundation
 
- Chose a real organisation (Kooking with Khwezi) and prepared two proposals for lecturer approval; the approved proposal is submitted as a separate document.
- Researched and gathered content from the owner and her social media (Instagram and TikTok), plus original text for menus, services and prices.
- Created the sitemap (above) and a clear folder structure.
- Built the HTML for the home page and six further pages (minimum requirement was five), using semantic elements (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`).
- Linked all pages through a working navigation menu and footer quick links.
- Commented the code and kept it indented and readable.
- Set up the private GitHub repository and committed regularly with descriptive messages.
## Part 2 Details – Designing the Visuals
 
- Created one external stylesheet (`Styles/styles.css`) linked to every page.
- **Base styles:** CSS reset, colour variables, base font and line height.
- **Typography:** Playfair Display and Lato, fluid `clamp()` sizes, 1.5 line height.
- **Layout:** Grid and Flexbox; multi-column on desktop switching to a single column on small screens.
- **Decoration:** borders, border radius, box shadows, background colours, gradient-free flat colour scheme, hover lift on cards.
- **Pseudo-classes and states:** `:link`, `:visited`, `:hover`, `:active`, `:focus-visible`, `:focus`, `:first-child`, `:nth-child(even)`, `::first-letter`, `::after`.

- **Screenshot evidence** (desktop, tablet, mobile):
  | Page | Desktop | Tablet | Mobile |
  |---|---|---|---|
  | Home | [screenshot] | [screenshot] | [screenshot] |
  | About | [screenshot] | [screenshot] | [screenshot] |
  | Menus | [screenshot] | [screenshot] | [screenshot] |
  | Gallery | [screenshot] | [screenshot] | [screenshot] |
  | Services | [screenshot] | [screenshot] | [screenshot] |
  | Enquiry | [screenshot] | [screenshot] | [screenshot] |
  | Contact | [screenshot] | [screenshot] | [screenshot] |
## Part 3 Details – Functionality and SEO
 
### JavaScript features
 
| Feature | File | Description |
|---|---|---|
| Dynamic menu | `menu.js` | Menu items are stored in an array and rendered as cards; search, category filter and sort update the list and result count |
| Lightbox | `gallery.js` | Click a gallery photo to view it larger; next/previous buttons, arrow keys, Escape and click-outside to close |
| Accordion | `services.js` | FAQ answers open one at a time using `aria-expanded` |
| Footer year | `main.js` | Inserts the current year |
| Animations | `styles.css` | Hero slider, accordion fade-in, card hover lift, lightbox fade (disabled for users who prefer reduced motion) |
| Maps | HTML | Google Maps embed in the footer on every page and on the contact page |
 
### Forms
 
**Enquiry form (`enquiry.html`)** – for customers who want to know about a service.
- Fields: full name, email, phone, event type, number of guests or meals, event date, town and venue, optional extras (checkboxes), response preference (radio buttons) and notes.
- Validation: name length, email format, phone format (10 to 15 digits), event type chosen, whole number of guests (minimum 10, or 1 for weekday meals), valid future date (weekday meals Monday to Friday only), venue entered. Errors show beside the field and are cleared as the user types.
- Processing: calculates an estimate from the package price, extra guests and chosen extras, then shows a price breakdown and an availability note based on the notice period needed for that event type. The enquiry is then sent to the form service with `fetch` (AJAX) without reloading the page, and a status message tells the customer whether it was sent. If sending fails, the customer can still email the enquiry or phone the business from the result panel.
- The Services page links to this form with the event type pre-selected.
**Contact form (`contact.html`)** – for general messages.
- Fields: full name, email, phone (optional), reason for contact and message.
- Validation: name, email format, optional phone format, message length (10 to 1000 characters).
- Processing: once validated, the details are compiled into an email (subject and body) addressed to the recipient set in `contact.js`. The message is sent to the form service with `fetch` (AJAX); the customer then sees the compiled email and can also open their own email app to send it to the recipient (this is also the backup if the automatic send fails).
- Security: hidden honeypot field to catch spam bots; `rel="noopener noreferrer"` on external links.
### SEO
 
- Unique `<title>` and meta description for every page.
- Meta keywords and robots and revisit tags (as taught in the module).
- One `<h1>` per page with `h2`/`h3` used in order.
- Descriptive image file names and meaningful `alt` text; decorative hero images use empty `alt`.
- Clean, descriptive page names (`menu.html`, `services.html`, and so on) and internal links between related pages.
- Mobile-friendly viewport and responsive design.
- Local details (Rustenburg, 66 Loop Street) in content and metadata.
- Social media links in the footer for off-page SEO.
- `robots.txt` lets crawlers index the whole site and points to the sitemap.
- `sitemap.xml` lists all seven pages with a last-modified date and priority.
### Deployment
 
The site is deployed at: [live site link] .
 
---
 

 
---
 
## Changelog
 
Update the dates to match your commit history.
 
### Part 1
 – Created the project folder structure and the home page.
 – Added About, Menu, Gallery, Services, Enquiry and Contact pages with semantic HTML.
 – Added navigation menu and footer links to all pages; added code comments.
 – Added README, sitemap and Part 1 documentation.
### Part 2
 – Created `styles.css` and linked it to all pages; added CSS reset, variables and base styles.
 – Added typography, Grid and Flexbox layouts, card styles, button styles and pseudo-class styling.
– Added responsive breakpoints, hamburger menu, responsive images with `srcset` and `sizes`.
 – Added screenshot evidence for desktop, tablet and mobile.
### Part 3
 – **Feedback from Part 2:** replaced fixed font sizes with fluid `clamp()` sizes so text scales smoothly on small phones.
 – **Feedback from Part 2:** corrected the card grid so it changes from three columns to two and then one column at the correct breakpoints.
 – **Feedback from Part 2:** allowed long email addresses in the footer to wrap on small phones.
 – **Feedback from Part 2:** allowed the company name in the header to wrap on very small screens (400px and below) so the menu button is no longer pushed off screen.
 – Added `menu.js` with dynamic menu rendering, search, category filter and sort.
– Added `gallery.js` and lightbox styles to the Gallery page.
 – Added `services.js` and the FAQ accordion to the Services page.
 – Built the enquiry form with validation, estimate calculation and availability response (`enquiry.js`).
 – Built the contact form with validation and email compilation (`contact.js`); added honeypot spam field.
 – Fixed `enquiry.js`: corrected the `guest` typo that stopped weekday estimates from working; corrected `herf` to `href` so the email and phone buttons work; weekday delivery now follows the same rules as weekday pickup (meals label, minimum of 1, Monday to Friday only).
 – Added AJAX (`fetch`) submission to both forms, with a status message and an email-link backup; removed the contact form's automatic opening of the email app.
 – Fixed invalid CSS (`soild`, `1 rem`, `warp`) so fieldset borders, padding and header wrapping apply.
– Fixed the enquiry page markup (one form with the correct id), added missing `target` and `rel` attributes to the contact page footer links, and corrected spelling mistakes on the Services and Contact pages.
 – Created `robots.txt` and `sitemap.xml`.
 – Added titles, meta descriptions, keywords, robots and revisit tags, and improved image alt text.
 – Deployed the website and updated the README.
---
 
## References
 
Form Spree, 2026. Kooking With Khwezi. [online] Available at: <https://formspree.io/forms/mrppwnke/integration> [Accessed 09 November 2026].

Google, 2026. Google Maps. [online] Available at: <https://www.google.com/maps/place/66+Loop+St,+Rustenburg,+2999/@-25.6712971,27.2359208,17z/data=!3m1!4b1!4m6!3m5!1s0x1ebe0961939f3aab:0x55ad76ab5378ed84!8m2!3d-25.6712971!4d27.2384957!16s%2Fg%2F11fmqnj778?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D> [Accessed 24 October 2026].

Instagram, 2026. khwezis_mobile_kitchen. [online] Available at: <https://www.instagram.com/khwezis_mobile_kitchen?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==> [Accessed 28 October 2026].

Mozilla Corporation, 2026. ARIA: aria-pressed attribute. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed> [Accessed 25 October 2026].

Mozilla Corporation, 2026. clamp() CSS function. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp> [Accessed 05 November 2026].

Mozilla Corporation, 2026. Document: createElement() method. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement> [Accessed 06 November 2026].

Mozilla Corporation, 2026. Document: getElementById() method. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById> [Accessed 26 October 2026].

Mozilla Corporation, 2026. Document: querySelectorAll() method. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll> [Accessed 25 October 2026].

Mozilla Corporation, 2026. Event: preventDefault() method. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault> [Accessed 05 November 2026].

Mozilla Corporation, 2026. Expressions and operators. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition> [Accessed 27 October 2026].

Mozilla Corporation, 2026. FormData. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/FormData> [Accessed 05 November 2026].

Mozilla Corporation, 2026. Functions. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions> [Accessed 26 October 2026].

Mozilla Corporation, 2026. Logical NOT (!). [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT> [Accessed 27 October 2026].

Mozilla Corporation, 2026. Logical OR (||). [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR> [Accessed 27 October 2026].

Mozilla Corporation, 2026. Statements and declarations. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else> [Accessed 26 October 2026].

Mozilla Corporation, 2026. Statements and declarations. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var> [Accessed 26 October 2026].

Mozilla Corporation, 2026. Using the Fetch API. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> [Accessed 06 November 2026].

TikTok, 2026. kooking_with_khwezi. [online] Available at: <https://www.tiktok.com/@kooking_with_khwezi?is_from_webapp=1&sender_device=pc> [Accessed 28 October 2026].

W3 Schools, 2026. HTML Form Validation. [online] Available at: <https://www.w3schools.com/js/js_validation.asp> [Accessed 25 October 2026].

W3 Schools, 2026. JS operators. [online] Available at: <https://www.w3schools.com/js/js_operators.asp> [Accessed 27 October 2026].

W3 Schools, 2026. Js Variables. [online] Available at: <https://www.w3schools.com/js/js_variables.asp> [Accessed 26 October 2026].

W3 Schools, 2026. Object this. [online] Available at: <https://www.w3schools.com/js/js_this.asp> [Accessed 27 October 2026].
