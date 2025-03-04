document.addEventListener("DOMContentLoaded", function () {
    function getGclid() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("gclid");
    }

    function storeGclid(gclid) {
        if (gclid) {
            localStorage.setItem("gclid", gclid);
        }
    }

    const gclid = getGclid();
    storeGclid(gclid);
});
