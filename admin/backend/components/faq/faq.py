from fastapi import APIRouter, Response, Request
import jwt
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from models import RegDataRequest, LoginDataRequest, BaseResponse
from database import db_create_user, db_check_user_in_system_by_email_and_login, db_check_user_in_system


router = APIRouter()

@router.post("/faq/getFolders/{page}", response_model=BaseResponse, tags=["Auth"])
async def register_user(request: Request,data: RegDataRequest):
    return {'header': 'OK', 'msg': ''}

