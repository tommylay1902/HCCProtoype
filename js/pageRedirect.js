const pageRedirect = () => {
  var delay = 3000; // time in milliseconds

  setTimeout(function () {
    window.location.href = `success.html`;
  }, delay);
};

pageRedirect();
