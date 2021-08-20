//src:https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

//Mutation observer track the change of a perticular dom element 
//So for single page application it is really useful 

function mutaion_observer(target) {
    const targetNode = target;
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    const callback = function (mutationsList, observer) {
        //our code will start here what we want to do
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}