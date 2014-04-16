function addListener(elem, ev, listener) {
    if (elem.attachEvent) {
        elem.attachEvent('on' + ev, listener);
    } else if (elem.addEventListener) {
        elem.addEventListener(ev, listener, false);
    } else {
        throw new Error('이벤트리스너에 미대응입니다.');
    }
}

function removeListener(elem, ev, listener) {
    if (elem.detachEvent) {
        elem.detachEvent('on' + ev, listener);
    } else if (elem.removeEventListener) {
        elem.removeEventListener(ev, listener, false);
    } else {
        throw new Error('이벤트리스터에 미대응입니다.');
    }
}
