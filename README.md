# Professional ATM Dashboard

## File order

1. `app.py` - Flask backend
2. `templates/login.html` - Login screen
3. `templates/dashboard.html` - ATM dashboard
4. `static/css/style.css` - UI styling
5. `static/js/app.js` - Frontend interactions
6. `requirements.txt` - Python dependency
7. `database.db` - Will be created later when we add the database

## Run the project

Open a terminal inside this folder:

```bash
pip install -r requirements.txt
python app.py
```

Then open:

`http://127.0.0.1:5000/`

## Current stage

The professional frontend is created and one frontend-to-Flask connection is already demonstrated:

`Balance Enquiry -> JavaScript fetch() -> Flask /api/balance -> JSON -> dashboard`

The remaining ATM operations will be connected one by one in the next stages.
