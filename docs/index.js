(async () => {
    const response = await fetch('./info.json');
    const data = await response.json();
    const jsBlock = document.querySelector('.test-js .text');
    jsBlock.innerText = data.message;
})();

