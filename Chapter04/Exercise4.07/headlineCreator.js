// headlineCreator.js
// code below is from following book instructions
// const headlineCreator = (() => {
//   function createHeadline(text, parentElementSelector = '#root') {}
//   const parentElement = document.querySelector(parentElementSelector);
//   const headlineToInsert = document.createElement('h1');
//   headlineToInsert.innerHTML = text;
//   parentElement.appendChild(headlineToInsert);
//   {
//   }
//   return {
//     createHeadline: createHeadline,
//   };
// })();
// code below type of from GitHub repository of book due to book instruction no clear to what needs to be typed
window.headlineCreator = (function () {
  function createHeadline(text, parentElementSelector = '#root') {
    const parentElement = document.querySelector(parentElementSelector);
    if (!test) {
      throw new Error('You Forgot To Pass The "text" Parameter');
    }
    if (!parentElement) {
      throw new Error(
        `There was no node found for the Selector: "${parentElementSelector}"`,
      );
    }
    const headlineToInsert = document.createElement('h1');
    headlineToInsert.innerText = text;
    parentElement.appendChild(headlineToInsert);
    return headlineToInsert;
  }
  return {
    createHeadline,
  };
})();
