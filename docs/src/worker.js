onmessage = async (e) => {
    if (e.data.type === 'FETCH_INFO') {
        const response = await fetch('https://maximtop.github.io/adguard-test-csp-trusted/src/info.json');
        const data = await response.json();
        postMessage({type: 'FETCH_INFO_RESPONSE', message: data.message});
    }
};
