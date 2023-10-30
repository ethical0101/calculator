<script>
    document.addEventListener("DOMContentLoaded", function () {
        const inputField = document.querySelector("input");
        const buttons = document.querySelectorAll("button");

        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                const buttonText = button.textContent;

                if (buttonText === "AC") {
                    inputField.value = "";
                } else if (buttonText === "DEL") {
                    inputField.value = inputField.value.slice(0, -1);
                } else if (buttonText === "+/-") {
                    inputField.value = eval(inputField.value) * -1;
                } else if (buttonText === "=") {
                    try {
                        inputField.value = eval(inputField.value);
                    } catch (error) {
                        inputField.value = "Error";
                    }
                } else {
                    inputField.value += buttonText;
                }
            });
        });
    });
</script>