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
