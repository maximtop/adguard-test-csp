(async () => {
    const response = await fetch('https://maximtop.github.io/adguard-test-csp-trusted/src/info.json');
    const data = await response.json();
    const jsBlock = document.querySelector('.test-js .text');
    jsBlock.innerText = data.message;
})();

if (window.Worker) {
    const myWorker = new Worker('src/worker.js');
    myWorker.postMessage({type: 'FETCH_INFO'});
    myWorker.onmessage = (e) => {
        if (e.data.type === 'FETCH_INFO_RESPONSE') {
            const jsWorkerBlock = document.querySelector('.test-js .worker-text');
            jsWorkerBlock.innerText = e.data.message;
        }
    };

    const remoteWorker = new Worker('https://maximtop.github.io/adguard-test-csp-trusted/src/trusted-worker.js');
    remoteWorker.postMessage({type: 'FETCH_INFO'});
    remoteWorker.onmessage = (e) => {
        if (e.data.type === 'FETCH_INFO_RESPONSE') {
            const jsWorkerBlock = document.querySelector('.test-js .remote-worker-text');
            jsWorkerBlock.innerText = e.data.message;
        }
    };
} else {
    console.log('your browser doesn\'t support workers');
}

