
function call_select_event(target){
    target.dispatchEvent(new Event('change', {bubbles: true}));
}