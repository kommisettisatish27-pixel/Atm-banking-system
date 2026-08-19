from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("login.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# Backend routes will be connected one by one in the next stage.
@app.route("/api/balance")
def balance():
    return jsonify({"success": True, "balance": 10000})

@app.route("/api/withdraw", methods=["POST"])
def withdraw():
    data = request.get_json() or {}
    amount = data.get("amount", 0)
    return jsonify({
        "success": True,
        "message": f"Withdrawal request received for ₹{amount}"
    })

if __name__ == "__main__":
    app.run(debug=True)
