document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    // Looks for (span) elements with footnote class
    const footnotes = article.querySelectorAll(".footnote");
    // Creates a separator if there are footnotes present
    if (footnotes.length > 0) {
      const hrElement = document.createElement("hr");
      article.appendChild(hrElement);
    }
    footnotes.forEach((footnote, index) => {
      // Generates and sets the footnote number
      const footnoteNumber = index + 1;
      footnote.innerHTML = `<sup>${footnoteNumber}</sup>`;
      // Creates the footnote content and appends it to the end of the article
      const footnoteContent = footnote.getAttribute("data-content");
      const footnoteElement = document.createElement("div");
      footnoteElement.classList.add("footnote-content");
      footnoteElement.innerHTML = `<b>${footnoteNumber}:</b> ${footnoteContent}`;
      article.appendChild(footnoteElement);
    });
  });
});
