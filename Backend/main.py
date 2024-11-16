from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request

app = FastAPI()

# static Folder files (CSS or JS)

app.mount("/static", StaticFiles(directory="static"), name="static")

# templates (HTML file)

templates = Jinja2Templates(directory="templates")

# Sample product data

products = [
    {"id": 1, "name": "Classic Sneaker", "description": "High Quality Sneaker", "price": 45500, "category": "Shoes"},
    {"id": 2, "name": "Wireless Headphones", "description": "Noise-cancelling headphones", "price": 4490, "category": "Electronics"},
    {"id": 3, "name": "Iphone", "description": "Iphone 15 Pink", "price": 57999, "category": "Phones"},
    {"id": 4, "name": "Blazer", "description": "Formal Blue Check Blazer", "price": 7999, "category": "Clothing"},
    {"id": 5, "name": "Power Bank", "description": "Portable charger", "price": 1299, "category": "Accessories"},
]

# API endpoint to fetch products
@app.get("/products")
def get_product():
    return products

# Render the HTML template
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


