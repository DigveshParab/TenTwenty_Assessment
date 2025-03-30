# TenTwenty_Assessment

## Index  
1. [Project Description](#project-description)  
2. [App Progress](#app-progress)  
3. [Motivation Behind Choosing This Stack](#motivation-behind-choosing-this-stack)  
4. [Challenges I Faced and The Lessons I Learned](#challenges-i-faced-and-the-lessons-i-learned)  
   - [Setting Up the Project from Scratch](#1-setting-up-the-project-from-scratch)  
   - [Tailwind CSS Setup & Workflow](#2-tailwind-css-setup--workflow)  
   - [Understanding "Pixel Perfect"](#3-understanding-pixel-perfect)
5. [Where I Got Stuck](#where-i-got-stuck)
6. [What I Take Away From This Project](#what-i-take-away-from-this-project)  
7. [A Note to the Reviewer / HR Department](#a-note-to-the-reviewer--hr-department)
8. [Using This Project](#using-this-project)  
 

## App Progress  
Following are the things I managed to complete:  

1. **Successfully Implemented the UI**  
   - Matched the **Figma design** for both **desktop and mobile views**.  
   - Ensured proper responsiveness across different screen sizes.  

2. **Built the Project From Scratch**  
   - Set up everything manually **without relying on boilerplate code**.  
   - Understood the **Next.js project structure** better.  

3. **Implemented the First Functionality (Banner with Auto-Image Change & Progress Button)**  
   - Created a **banner that changes images** after **10 seconds**.  
   - Implemented a **next button** that shows the duration progress.  
   - **Creative liberties taken:**  
     - Couldn’t fully replicate the reference animation but implemented a **custom animation** instead.  
     - Used **some images from online sources**.  
     - Assumed some **placeholder text** where necessary.  

4. **Added a Flash Screen When the App Loads or Refreshes**  
   - Created a **custom animation** for the flash screen.  

5. **Implemented Title & Description Animation for the Second Section**  
   - Ensured that the **title appears first** before the **description**, as instructed.  

6. **Designed the UI for the Image Slider**  
   - The layout and styling were **completed**.  
   - **However, due to time constraints and office commitments, I couldn't implement the full functionality.** 

## Project Description

This project is a technical assessment for the role of Frontend Developer at TenTwenty. It is a single-page application built using **Next.js** and **Tailwind CSS**. The application is fully responsive, adapting seamlessly to both smaller and larger screens while maintaining a design that adjusts dynamically based on screen type.



## Motivation Behind Choosing This Stack

I have been learning **Next.js** and **Tailwind CSS** for over two weeks now, making me relatively new to this stack. The reason I chose it is that during my conversation with the recruiter, she mentioned that this role specifically requires **Next.js** development. 

Even though I am a beginner, I took this as a challenge to test my skills and boost my confidence by building this project using the required stack.



## Challenges I Faced and The Lessions I Learned

### 1. Setting Up the Project from Scratch  
The project requirement stated that everything needed to be set up **completely from scratch**. This was a real **head-scratcher** because, up until now, all my Next.js projects used commands that installed a **boilerplate** for me. Since I am still new to **Next.js**, manually setting up the project was a bit challenging.  

**Solution:**  
I managed to **set up the project from scratch** and, in the process, learned some important things about Next.js. I discovered that there are **two types of setups**:  
- **Page Router** (which was the old method and is no longer used from version 13+).  
- **App Router** (the latest method used in modern Next.js applications).  

This experience made me more **familiar with the Next.js file structure** and gave me a deeper understanding of how things work under the hood.  

---

### 2. Tailwind CSS Setup & Workflow  
Since I had to **manually set up Tailwind CSS**, I ran into a couple of issues:  

#### **a) Configuration Issue**  
After installing the Tailwind package, I **wasn't able to configure it** the way I had done previously (by adding `base`, `components`, and `utils` modules).  

**Solution:**  
After spending some time reading the **official documentation**, I realized that **from Tailwind v4 onwards**, this method is no longer required. Instead, **just importing Tailwind into `global.css` is enough**. Turns out, it all came down to **a single line of code** 😅.  

#### **b) Getting Familiar with Tailwind’s Workflow**  
Initially, I was a bit **slow at writing Tailwind classes**, but as I progressed, I got the hang of it.  

**What I learned:**  
- I can now **visualize** which built-in classes to use instead of constantly referring to the documentation.  
- **Trial and error** helped me experiment and understand how different utility classes work.  
- I got better at setting up **responsive breakpoints** for different devices, which means **goodbye, `@media` queries!** 🎉  



### 3. Understanding "Pixel Perfect"  
When I first read the guidelines, the term **"pixel perfect"** was **completely foreign to me**. At first, I thought it had something to do with the **quality of images** used in the project (**me thinking it was related to image resolution 😂**).  

**Solution:**  
After researching the term and trying out the **Pixel Perfect extension**, I was **amazed** to see that such a tool exists! It allowed me to **overlay the design on my implementation** to ensure **precise alignment**. This was a **game-changer**, and I can definitely see myself using this tool in future projects to improve design accuracy.  


## Where I Got Stuck  

1. **Image Slider Functionality:**  
   - I successfully **designed** the UI, but due to **time constraints**, I couldn’t implement **functionality like navigation buttons and auto-slide**.  
   - Given more time, I would have completed this.  

2. **Animating the Banner Transition:**  
   - The reference had a **specific animation** for the banner, but I wasn’t able to **replicate it exactly**.  
   - Instead, I **created my own version**, ensuring the transition looked smooth.  

3. **Fine-Tuning Animations:**  
   - I wanted to make **every transition smooth**, but balancing **custom animations** with **Tailwind’s limitations** was tricky.  
   - I need to explore **Framer Motion** in the future for better animations.  

### ✨ Update:  
I managed to get some time and have now **implemented smooth animations** in the project. 🚀  

## What I Take Away From This Project  

### 1. Confidence & Learning  
At the end of this **48-hour challenge**, I feel I have **gained confidence** and **acquired a lot of new knowledge** in **Next.js and Tailwind CSS**. This is just the beginning, and I will **continue to push myself further** in mastering these technologies.  

### 2. Taking on Challenges  
This project has helped me **build confidence in taking up new challenges** and **delivering within a given time frame**. It reinforced my ability to **learn quickly and adapt**, which I find crucial for growth in this industry.  

### 3. Motivation to Work with Next.js & Tailwind  
This experience has **greatly motivated me** to work more with **Next.js and Tailwind CSS**. They are **powerful tools**, and working on this project has **helped me improve more than just watching tutorials**. I now have **hands-on experience** with real-world development challenges, and I better understand **what the industry demands**. This has inspired me to **further upskill and refine my abilities**.  

---

## A Note to the Reviewer / HR Department  

Thank you for reaching out to me and providing me with this **opportunity**. I completely understand that you are looking for a **candidate with excellent skills**, and that is fair—**you need the best people on your team**.  

If you decide to **give me this chance**, I can assure you of one thing: **with every challenge that comes my way at TenTwenty, I will mold myself and only get better from this point forward**. I have the **hunger to grow, improve, and take things one step at a time**.  

I appreciate your time and consideration. Looking forward to the possibility of working with your team!  


## Using This Project

To run this project locally, follow these steps:

```bash
git clone <repository-url>
cd tentwenty-assessment
npm install
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---



