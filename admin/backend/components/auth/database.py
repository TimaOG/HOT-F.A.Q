import psycopg2
from models import *
from models import *
from passlib.context import CryptContext
from fastapi import FastAPI, UploadFile, File

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

con = psycopg2.connect(
    database="fm",
    user="postgres",
    password="",
    host="127.0.0.1",
    port="5432"
)


def db_create_user(data: RegDataRequest):
    cur = con.cursor()
    cur.execute('''INSERT INTO Users (fio,userLogin, userPassword,birthdate, sex, email) 
        VALUES (%s, %s, %s, %s, %s, %s)''', (data.fio, data.login,
                                             data.password, data.birthdate, data.sex, data.email))
    con.commit()
    cur.close()


def db_check_user_in_system_by_email_and_login(email: str, login: str):
    cur = con.cursor()
    cur.execute('''SELECT id FROM Users WHERE email=%s''', (email,))
    resEmail = cur.fetchone()
    cur.execute('''SELECT id FROM Users WHERE userLogin=%s''', (login,))
    resLogin = cur.fetchone()
    cur.close()
    if resEmail != None:
        return [False, 'Email already exist']
    if resLogin != None:
        return [False, 'Login already exist']
    return [True, '']


def db_check_user_in_system(data: LoginDataRequest):
    cur = con.cursor()
    cur.execute('''SELECT id, userPassword FROM Users WHERE email=%s''', (data.email,))
    res = cur.fetchone()
    cur.close()
    if res == None:
        return [False, '']
    return [True, res[1], res[0]]