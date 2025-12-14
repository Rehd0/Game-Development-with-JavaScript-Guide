const shareButtons = document.querySelectorAll(".shareBtn");

// function to handle share button clicks
shareButtons.forEach((shareButtons) => {
  shareButtons.addEventListener("click", async () => {
    const url = shareButtons.dataset.url;

    // share section url or copy to clipboard
    const fullUrl = url.startsWith("#")
      ? window.location.href.split("#")[0] + url
      : new URL(url, window.location.origin).href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check out this game development guide! \n",
          url: fullUrl,
        });
      } catch (err) {
        prompt("Copy this link to share:", fullUrl);
      }
    } else {
      // Proper fallback
      navigator.clipboard.writeText(fullUrl);
      alert("Link copied to clipboard");
    }
  });
});
