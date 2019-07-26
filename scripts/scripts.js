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
                "--form-accent-color": "rgba(255,255,255,0.5)",
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
                    "--base-text-color": "rgba(0,0,0,0.85)",
                    "--base-h1-color": "#8b0010",
                    "--base-h2-color": "rgba(0,0,0,0.85)",
                    "--base-background-color": "#cb1b30",
                    "--base-link-color": "#8b0010",
                    "--content-background-color": "white",
                    "--menu-text-color": "#8b0010",
                    "--menu-link-color": "#8b0010",
                    "--menu-background-color": "#38b218",
                    "--legal-color": "#8b0010",
                    "--icon-rotation": "300deg",
                    "--icon-brightness": "0.25", 
                    "--form-background-color": "#8b0010",
                    "--form-accent-color": "rgba(0,0,0,0.85)",
                    "--form-button-text-color": "rgba(255,255,255,.75)",
                    "--form-submit-button-background-color": "#269309",
                    "--form-delete-button-background-color": "#135a00",
                    "--member-text-color": "rgba(255,255,255,.5)",
                    "--member-background-color": "#8b0010",
                    "--member-h3-color": "#d94557"
                });
            break;

            case "green":
                    $("body").css({
                        "--base-text-color": "rgba(0,0,0,0.85)",
                        "--base-h1-color": "#159b42",
                        "--base-h2-color": "rgba(0,0,0,0.85)",
                        "--base-background-color": "#859372",
                        "--base-link-color": "#159b42",
                        "--content-background-color": "#d6e4c3",
                        "--menu-text-color": "#159b42",
                        "--menu-link-color": "#159b42",
                        "--menu-background-color": "#c1d01c",
                        "--legal-color": "#159b42",
                        "--icon-rotation": -"300deg",
                        "--icon-brightness": "0.25", 
                        "--form-background-color": "#159b42",
                        "--form-accent-color": "rgba(0,0,0,0.85)",
                        "--form-button-text-color": "rgba(255,255,255,.75)",
                        "--form-submit-button-background-color": "#828e00",
                        "--form-delete-button-background-color": "#606900",
                        "--member-text-color": "rgba(255,255,255,.5)",
                        "--member-background-color": "#159b42",
                        "--member-h3-color": "#d2df47"
                    });
                break;

                case "yellow":
                        $("body").css({
                            "--base-text-color": "rgba(0,0,0,0.75)",
                            "--base-h1-color": "#e9e825",
                            "--base-h2-color": "rgba(0,0,0,0.75)",
                            "--base-background-color": "#fffe6b",
                            "--base-link-color": "#e9e825",
                            "--content-background-color": "#ffffba",
                            "--menu-text-color": "#e9e825",
                            "--menu-link-color": "#e9e825",
                            "--menu-background-color": "#9d59c6",
                            "--legal-color": "#e9e825",
                            "--icon-rotation": "330deg",
                            "--icon-brightness": "0.6", 
                            "--form-background-color": "#e9e825",
                            "--form-accent-color": "rgba(0,0,0,0.75)",
                            "--form-button-text-color": "rgba(255,255,255,.75)",
                            "--form-submit-button-background-color": "#9d59c6",
                            "--form-delete-button-background-color": "#6e209c",
                            "--member-text-color": "rgba(0,0,0,.75)",
                            "--member-background-color": "#e9e825",
                            "--member-h3-color": "#6e209c"
                        });
                    break;

                    case "black":
                            $("body").css({
                                "--base-text-color": "rgba(255,255,255,0.5)",
                                "--base-h1-color": "rgba(255,255,255,0.75)",
                                "--base-h2-color": "rgba(255,255,255,0.5)",
                                "--base-background-color": "#4f4856",
                                "--base-link-color": "#ffffff",
                                "--content-background-color": "#1e1c20",
                                "--menu-text-color": "#ffffff",
                                "--menu-link-color": "#ffffff",
                                "--menu-background-color": "#4f4856",
                                "--legal-color": "#ffffff",
                                "--icon-rotation": -"30deg", 
                                "--icon-brightness": "2",
                                "--form-background-color": "#4f4856",
                                "--form-accent-color": "rgba(255,255,255,0.5)",
                                "--form-button-text-color": "rgba(255,255,255,0.5)",
                                "--form-submit-button-background-color": "#1e1c20",
                                "--form-delete-button-background-color": "#1e1c20",
                                "--member-text-color": "rgba(0,0,0,0.5)",
                                "--member-background-color": "#4f4856",
                                "--member-h3-color": "rgba(255,255,255,0.75)"
                            });
                        break;
        default:
            console.log(colorSwitch.value);        
    }
}


colorSwitch.parentElement.addEventListener("change", changeColor);
