from fastapi import FastAPI, Request, Body
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from pathlib import Path
from components.users import users
from components.analize import analize
from components.settings import settings
from components.auth import auth
from components.faq import faq
from components.survey import survey


app = FastAPI()

app.include_router(auth.router)
app.include_router(analize.router)
app.include_router(faq.router)
app.include_router(settings.router)
app.include_router(survey.router)
app.include_router(users.router)

@app.get("/", response_class=HTMLResponse)
async def openMain(request: Request):
    return {'hh': 'hh'}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=666)