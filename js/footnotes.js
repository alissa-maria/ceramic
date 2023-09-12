document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    const footnotes = article.querySelectorAll(".footnote");
    if (footnotes.length > 0) {
      const hrElement = document.createElement("hr");
      article.appendChild(hrElement);
    }
    footnotes.forEach((footnote, index) => {
      // Generate and set the footnote number
      const footnoteNumber = index + 1;
      footnote.innerHTML = `<sup>${footnoteNumber}</sup>`;

      // Create the footnote content and append it to the end of the article
      const footnoteContent = footnote.getAttribute("data-content");
      const footnoteElement = document.createElement("div");
      footnoteElement.classList.add("footnote-content");
      footnoteElement.innerHTML = `<b>${footnoteNumber}:</b> ${footnoteContent}`;
      article.appendChild(footnoteElement);
    });
  });
});
