document.addEventListener("DOMContentLoaded", function () {
    console.log('Script loaded');
    
    function getGclid() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("gclid");
    }

    function storeGclid(gclid) {
        if (gclid) {
            console.log('found');
            localStorage.setItem("gclid", gclid);
        }
    }

    const gclid = getGclid();
    storeGclid(gclid);
});
