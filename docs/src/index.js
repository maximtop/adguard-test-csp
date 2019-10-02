(async () => {
    const response = await fetch('https://maximtop.github.io/adguard-test-csp-trusted/src/info.json');
    const data = await response.json();
    const jsBlock = document.querySelector('.test-js .text');
    jsBlock.innerText = data.message;
})();

