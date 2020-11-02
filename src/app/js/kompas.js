// kompas documentation
// https://dev.to/gigantz/real-compass-on-mobile-browsers-with-javascript-3emi

const kompas = () => {
    const compassCircle = document.querySelector(".compass-circle");
    const myPoint = document.querySelector(".my-point");

    let compass;
    const isIOS = !(
        navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
        navigator.userAgent.match(/AppleWebKit/)
    );

    function init() {
        startCompass;
    }

    function startCompass() {
        if (isIOS) {
            DeviceOrientationEvent.requestPermission()
                .then((response) => {
                    if (response === "granted") {
                        window.addEventListener("deviceorientation", handler, true);
                    } else {
                        alert("has to be allowed!");
                    }
                })
                .catch(() => alert("not supported"));
        } else {
            window.addEventListener("deviceorientationabsolute", handler, true);
        }
    }

    function handler(e) {
        compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
        compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;
    }

    init();
}

export { kompas };