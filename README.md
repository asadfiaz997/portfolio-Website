# Personal Portfolio Website

> **Before submitting:** Replace all sample details (name, email, links, skills, and project descriptions) with accurate information about yourself. The project cards currently show illustrative practice concepts, not verified completed work.

## 1. Project Overview

This project is a responsive personal portfolio website created with HTML, CSS, and JavaScript. It introduces the portfolio owner, presents their skills and projects, explains their working values, and provides contact information. The goal is to create a professional online presence that is easy to navigate on desktop and mobile devices.

## 2. Content Planning — Part 1

### 1. What is your full name as you want it displayed professionally?
**Answer:** Your Name. Replace this sample with the full name you want to display professionally.

### 2. What is the purpose of your portfolio website?
**Answer:** The purpose is to present my professional identity, skills, learning progress, and projects in one place. It can help potential employers, clients, and collaborators understand what I can contribute.

### 3. Who is the target audience?
**Answer:** My target audience includes employers, recruiters, clients, classmates, and other developers who want to learn about my skills and work.

### 4. What skills do you want to highlight?
**Answer:** The starter website highlights HTML, CSS, JavaScript, responsive design, accessibility awareness, and Git/GitHub. I will keep only the skills that accurately represent my experience.

### 5. What projects or work will you showcase?
**Answer:** The website includes sample portfolio, task planner, and dashboard concepts to demonstrate how project cards can be presented. I will replace these with genuine projects, explain my contribution, and add repository or live-demo links when available.

### 6. How will you describe yourself in a short professional bio?
**Answer:** “I am an aspiring web developer who enjoys creating clear, accessible, and useful digital experiences. I am developing my front-end skills through hands-on projects and value thoughtful design, readable code, and continuous learning.” Edit this bio to match your own background.

### 7. What pages will your site include?
**Answer:** The website is a single-page portfolio with Home, About, Skills, Projects, Approach, and Contact sections. A single-page structure keeps the main information easy to find.

### 8. What is your career goal or desired role?
**Answer:** My sample goal is to pursue an entry-level web development role where I can continue learning and contribute to useful digital products. Personalize this goal for your desired career.

### 9. What technologies or tools do you have experience with?
**Answer:** This project uses HTML5, CSS3, JavaScript, Git, GitHub, and GitHub Pages. List other technologies only if you have used them.

### 10. What achievements or experiences are worth highlighting?
**Answer:** I can highlight relevant coursework, personal projects, certifications, volunteer work, teamwork, and practical experience. Add only achievements that are true for you.

### 11. What call-to-action should visitors take?
**Answer:** Visitors are encouraged to explore the projects and contact me about opportunities or collaboration.

### 12. Will you include a resume? In what format?
**Answer:** An optional resume can be included as a PDF in the `assets/` folder, with a clearly labelled download link. Add the link only after the PDF has been created and reviewed.

### 13. What social or professional links will you include?
**Answer:** The template includes GitHub and LinkedIn links. Replace the generic links with my own public profiles and test them before publishing.

## 3. Design Planning — Part 2

### 1. What overall style will best represent you?
**Answer:** A clean, modern, professional style with generous spacing, simple shapes, and clear typography will help visitors focus on the content.

### 2. What color scheme will you use and why?
**Answer:** The palette uses deep navy (`#101828`) for contrast and professionalism, an off-white background (`#FBFCFF`) for readability, soft lavender (`#B8A5FF`) for accents, and mint (`#A6F3CF`) for highlights. These colors create a consistent visual identity.

### 3. What fonts will you use for headings and body text?
**Answer:** The design uses Manrope for headings and DM Sans for body text. Arial is specified as a fallback. The Google Fonts versions require an internet connection; local fallback fonts are available.

### 4. How will your design reflect your personality or field?
**Answer:** The simple layout, code-inspired hero graphic, and technology-focused project cards communicate an interest in web development while keeping the site professional.

### 5. What layout will your homepage follow?
**Answer:** The homepage begins with a navigation bar and hero introduction. It continues with About, Skills, Projects, Approach, and Contact sections, followed by a footer.

### 6. How will you organize project sections visually?
**Answer:** Projects are shown in consistent cards with a visual preview, project type, title, short description, technology tags, and a next step. Each real project should link to a working demo or repository where possible.

### 7. Will the site be mobile-friendly? How will you ensure responsiveness?
**Answer:** Yes. CSS media queries adjust the grid and spacing for smaller screens. The mobile navigation opens with a button, and the layout avoids relying on a desktop-only width.

### 8. What visual hierarchy will guide visitors?
**Answer:** Large headings introduce each section, smaller text gives supporting details, accent colors emphasize key terms, and buttons highlight important actions. Consistent spacing separates content groups.

### 9. How will consistency be maintained across pages?
**Answer:** The site uses shared CSS variables for colors, repeated button styles, consistent card shapes, a common typography system, and a reusable navigation and footer. Although this is a single-page site, the same system applies throughout.

### 10. How will accessibility be considered?
**Answer:** The page uses semantic HTML, a skip link, descriptive labels, visible keyboard focus, sufficient text sizing, responsive layouts, and a live status region for form feedback. Motion is reduced when the visitor requests reduced motion. Contrast and keyboard operation should still be manually tested before submission.

### 11. Will you use icons, images, or illustrations? Why?
**Answer:** The starter design uses CSS-created decorative illustrations and simple symbols to keep the website lightweight. Real project screenshots or a professional photo may be added when they help explain the work. Meaningful images should include alt text; purely decorative images should be hidden from assistive technology.

### 12. What portfolio websites inspired your design?
**Answer:** The design uses common patterns found in modern developer portfolios: a concise hero section, project cards, clear navigation, and a direct contact area. If I use a particular portfolio as inspiration, I will add its exact URL here and explain which ideas influenced my design. The current template does not claim to reproduce a specific website.

## 4. Information Organization

The navigation links lead to the main sections in the following order:

1. **Home:** Name, professional role, introduction, and calls to action.
2. **About:** Background and professional interests.
3. **Skills:** Technologies and skills.
4. **Projects:** Project descriptions and links.
5. **Approach:** Values related to clarity, accessibility, and learning.
6. **Contact:** Email details and a form demonstration.
7. **Footer:** Copyright year and back-to-top link.

This order introduces the person first, presents evidence of skills in the middle, and provides a contact path at the end.

## 5. Wireframe Design

The homepage wireframe follows this structure:

```text
+------------------------------------------------------+
| LOGO / NAME                  ABOUT SKILLS PROJECTS    |
+------------------------------------------------------+
|                                                      |
|  Hi, I'm Your Name              CODE ILLUSTRATION    |
|  Aspiring Web Developer                              |
|  Short professional introduction                     |
|  [Explore my work] [Get in touch]                    |
|                                                      |
+------------------------------------------------------+
| ABOUT ME                       BIO / CAREER GOALS     |
+------------------------------------------------------+
| SKILLS                                               |
| [HTML]         [CSS]          [JS]         [GitHub]   |
+------------------------------------------------------+
| PROJECTS                                             |
| [Project 1]          [Project 2]         [Project 3]  |
+------------------------------------------------------+
| WHAT MATTERS TO ME                                   |
+------------------------------------------------------+
| CONTACT INFORMATION             CONTACT FORM         |
+------------------------------------------------------+
| FOOTER                                               |
+------------------------------------------------------+
```

This wireframe is a text-based layout sketch. For the assignment, you can also create a hand-drawn or computer-aided wireframe, save it as an image, and add it to this repository.

## 6. Interaction and Functionality — Part 3

### 1. What interactive elements will your site include?
**Answer:** The website includes section navigation, a responsive menu button, project links, contact links, a form, and a back-to-top link.

### 2. Will your site include a contact form? How will it work?
**Answer:** Yes. The form requires a name, valid email address, and message. JavaScript uses built-in browser validation and displays feedback. **This starter form does not send or store messages.** To receive real messages, I must connect a form-handling service or build a backend before launch.

### 3. What JavaScript features will you implement?
**Answer:** JavaScript opens and closes the mobile menu, updates the footer year, validates the contact form, and provides a confirmation-style status message.

### 4. How will users receive feedback from interactions?
**Answer:** The menu updates its expanded state, browser validation identifies missing or invalid form fields, and a live status region explains the form result to visitors and assistive technologies.

### 5. How does interactivity improve the user experience?
**Answer:** Navigation makes it easier to reach content, responsive menu behavior supports mobile visitors, and form feedback helps users understand what happened after they submit the form.

## 7. Technical Overview

- **HTML5:** Semantic structure and content.
- **CSS3:** Colors, layout, responsive media queries, and reduced-motion preferences.
- **JavaScript:** Menu interaction, footer year, and form validation feedback.
- **Git/GitHub:** Source control and project hosting.
- **GitHub Pages:** Static website deployment.

The project has no build step or package dependencies. It can be opened locally by opening `index.html` in a browser.

## 8. Testing Plan

Before publishing, I will:

- Check all navigation links and section anchors.
- Test the menu at mobile and desktop widths.
- Submit the contact form with missing, invalid, and valid fields.
- Confirm that the form clearly explains that no message is actually sent.
- Navigate using only a keyboard and check visible focus indicators.
- Check heading order, color contrast, text readability, and reduced-motion behavior.
- Review the browser console for JavaScript errors.
- Open the deployed GitHub Pages URL and test all links again.

## 9. External Resources

- GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Google Fonts: https://fonts.google.com/ (Manrope and DM Sans)
- MDN Web Docs: https://developer.mozilla.org/ (HTML, CSS, and JavaScript reference)

The page is primarily built with original HTML, CSS, and JavaScript. If external images, icons, or other assets are added, list their source URLs and required attributions here.

## 10. Timeline and Project Milestones

| Milestone | Planned work |
|---|---|
| 1. Planning | Answer the content questions and identify the audience. |
| 2. Wireframe | Sketch the main page layout and navigation. |
| 3. Development | Create HTML sections and apply CSS styling. |
| 4. Interactivity | Implement the mobile menu and form validation. |
| 5. Testing | Check responsiveness, accessibility, links, and errors. |
| 6. Deployment | Upload to GitHub and enable GitHub Pages. |
| 7. Submission | Verify the repository and live website URLs. |

## 11. Deployment Links

- **GitHub repository:** Add your repository URL after creating it.
- **Live website:** Add your GitHub Pages URL after publishing it.

## 12. Final Reflection

This project brings together content planning, visual design, responsive development, and JavaScript interaction. It also demonstrates the importance of accessibility, testing, documentation, and deployment. After replacing the sample details with my own information, I will use feedback and testing to improve the finished portfolio.
