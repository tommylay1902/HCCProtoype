const pageRedirect = () => {
  var delay = 8000; // time in milliseconds

  setTimeout(function () {
    window.location.href = `success.html`;
  }, delay);
};

pageRedirect();
