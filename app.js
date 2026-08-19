document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const card = document.getElementById("cardNumber").value;
            const pin = document.getElementById("pin").value;
            const message = document.getElementById("loginMessage");

            if (card.length !== 16 || pin.length !== 4) {
                message.textContent = "Enter a valid 16-digit card number and 4-digit PIN.";
                return;
            }

            // Temporary frontend-only login.
            // In the next stage, this will call Flask.
            window.location.href = "/dashboard";
        });
    }

    const buttons = document.querySelectorAll(".menu-btn");
    const status = document.getElementById("statusMessage");

    buttons.forEach((button) => {
        button.addEventListener("click", async () => {
            const action = button.dataset.action;

            if (action === "balance") {
                try {
                    const response = await fetch("/api/balance");
                    const data = await response.json();

                    if (data.success) {
                        document.getElementById("balance").textContent =
                            `₹${data.balance.toLocaleString("en-IN")}`;
                        status.textContent = "Balance updated from Flask backend.";
                    }
                } catch (error) {
                    status.textContent = "Unable to connect to backend.";
                }
            } else {
                status.textContent =
                    `${button.querySelector("strong").textContent} selected. Backend connection will be added next.`;
            }
        });
    });

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.location.href = "/";
        });
    }
});
