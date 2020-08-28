// ------------------------------------------------------------------------------------------------------------
// Landing page JS

const load = () => {
    document.getElementById('landingContainer').focus()
}

document.getElementById('landingContainer').addEventListener("keydown", function (e) {
    window.location.assign("/mainGame.html")
});