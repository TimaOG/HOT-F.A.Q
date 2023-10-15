from pydantic import BaseModel
from datetime import datetime, date
from fastapi import FastAPI, UploadFile, File


class RegDataRequest(BaseModel):
    fio: str
    login: str
    password: str
    password2: str
    email: str
    sex: bool
    birthdate: str


class LoginDataRequest(BaseModel):
    email: str
    password: str

class BaseResponse(BaseModel):
    header: str
    msg: str