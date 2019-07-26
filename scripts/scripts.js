var colorSwitch = document.getElementById("styleSwitch");

function helloWorld() {
    console.log("Script attachment test");
}

function changeColor() {

    /* now here's the function that makes the donuts!
     * this is the reason all my colors in the CSS are
     * stored in variables.  jQuery really rules for
     * making this so easy! */

    switch(colorSwitch.value) {
        case "blue":
            $("body").css({
                "--base-text-color": "rgba(255,255,255,0.5)",
                "--base-h1-color": "#0c5698",
                "--base-h2-color": "rgba(255,255,255,0.5)",
                "--base-background-color": "#0f4778",
                "--base-link-color": "#eb8a02",
                "--content-background-color": "#0c3961",
                "--menu-text-color": "#eb8a02",
                "--menu-link-color": "#eb8a02",
                "--menu-background-color": "#3e2000",
                "--legal-color": "#eb8a02",
                "--icon-rotation": -"30deg", 
                "--icon-brightness": "0.5",
                "--form-background-color": "#eb8a02",
                "--form-accent-color": "rgb(255,255,255,0.5)",
                "--form-button-text-color": "#adeaed",
                "--form-submit-button-background-color": "#031628",
                "--form-delete-button-background-color": "#3e2400",
                "--member-text-color": "rgba(0,0,0,0.5)",
                "--member-background-color": "#eb8a02",
                "--member-h3-color": "#3e2400"
            });
            break;

        case "red":
                $("body").css({
                    "--base-text-color": "rgba(0,0,0,0.75)",
                    "--base-h1-color": "#8b0010",
                    "--base-h2-color": "rgba(0,0,0,0.75)",
                    "--base-background-color": "#cb1b30",
                    "--base-link-color": "#8b0010",
                    "--content-background-color": "white",
                    "--menu-text-color": "#8b0010",
                    "--menu-link-color": "#8b0010",
                    "--menu-background-color": "#38b218",
                    "--legal-color": "#8b0010",
                    "--icon-rotation": -"300deg",
                    "--icon-brightness": "0.25", 
                    "--form-background-color": "#8b0010",
                    "--form-accent-color": "rgb(255,255,255,0.5)",
                    "--form-button-text-color": "#adeaed",
                    "--form-submit-button-background-color": "#031628",
                    "--form-delete-button-background-color": "#3e2400",
                    "--member-text-color": "rgba(0,0,0,0.5)",
                    "--member-background-color": "#8b0010",
                    "--member-h3-color": "#3e2400"
                });
            break;

        default:
            console.log(colorSwitch.value);        
    }
}


colorSwitch.parentElement.addEventListener("change", changeColor);
