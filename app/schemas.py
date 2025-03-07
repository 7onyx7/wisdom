from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class ReminderSchema(BaseModel):
    id: Optional[int]
    title: str
    description: Optional[str] = None
    reminder_time: datetime

    class Config:
        orm_mode = True

class CommandRequest(BaseModel):
    command: str

class CommandResponse(BaseModel):
    response: str