let form = document.getElementById("feedback-form");
let main_container = document.getElementById("container");
let loading_container = document.getElementById("loading-container");
let thankyou_container = document.getElementById("thankyou-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let params = new URLSearchParams(data);
    loading_container.style.display = "flex";
    fetch(
        "https://script.google.com/macros/s/AKfycbxSRVlbHp7u0FxQlwUZ0uFGFBOpeutXk8eFm6DgwUflEYIv-5StpQkW_L54S3LrCOLXdA/exec?" +
            params.toString(),
        {
            method: "POST",
        }
    )
        .then((d) => {
            loading_container.style.display = "none";
            main_container.style.display = "none";
            thankyou_container.style.display = "block";
        })
        .catch((e) => {
            loading_container.style.display = "none";
            main_container.style.display = "block";
            thankyou_container.style.display = "none";
            alert("Something went wrong, try after some time.");
        });
});

// method = "post";
// action =
//     "https://script.google.com/macros/s/AKfycbxSRVlbHp7u0FxQlwUZ0uFGFBOpeutXk8eFm6DgwUflEYIv-5StpQkW_L54S3LrCOLXdA/exec";
