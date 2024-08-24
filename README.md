# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](/MyScreenshots/Desktop-blog-preview-card.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Web Components

### What I learned

Use of HTML Template:

```html
<template id="blog-preview-card-template">
  <article>
    <img src="/assets/images/illustration-article.svg" />
    <div class="content">
      <div class="category">Learning</div>
      <h2 class="date">Published 21 Dec 2023</h2>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
    <div class="author">
      <img src="/assets/images/image-avatar.webp" alt="" />
      <p>Greg Hooper</p>
    </div>
  </article>
</template>
```

Media queries for mobile and desktop:

```css
@media screen and (max-width: 376px) {
  article {
    margin-top: initial;
    margin-top: 156px;
    width: 327px;
    height: 501px;
  }

  article > img {
    width: 279px;
    height: 200px;
    box-shadow: none;
  }

  .category {
    height: 26px;
    width: 73px;
    font-size: 12px;
  }

  .date {
    font-size: 12px;
  }

  h1 {
    font-size: 20px;
  }

  .content p {
    font-size: 14px;
  }
}
```

Creating the webcomponent as extension of HTMLElement:

```js
export class BlogPreviewCard extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("blog-preview-card-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    const styles = document.createElement("style");
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/BlogPreviewCard.css");
      const css = await request.text();
      styles.textContent = css;
    }

    loadCSS();
  }
}

customElements.define("blog-preview-card", BlogPreviewCard);
```

### Continued development

I will continue using web components for upocoming challenges.

### Useful resources

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

## Author

- Website - [Gustavo Sanchez](https://gusanchefullstack.dev/)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)
