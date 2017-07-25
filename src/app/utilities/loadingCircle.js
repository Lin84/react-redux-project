function createLoadingCircle() {
    if (!document.querySelector('.loader__overlay')) {
        const loadingCircleHtml = document.createElement('div');
        loadingCircleHtml.className = 'loader__overlay';
        loadingCircleHtml.innerHTML = '<div class="loader__container"><div class="loader loader__circle"></div></div>';
        document.body.appendChild(loadingCircleHtml);
    }
}

function removeLoadingCircle() {
    if (document.querySelector('.loader__overlay')) {
        document.querySelector('.loader__overlay').classList.remove('js-loader-active');
        document.body.removeChild(document.querySelector('.loader__overlay'));
    }
}

function showLoadingCircle() {
    if (document.querySelector('.loader__overlay')) {
        document.querySelector('.loader__overlay').classList.add('js-loader-active');
    }
}

export {
    createLoadingCircle,
    removeLoadingCircle,
    showLoadingCircle
};
