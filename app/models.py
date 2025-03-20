from sqlalchemy import Column, Integer, String, DateTime, Text, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    reminders = relationship("Reminder", back_populates="owner")

class Reminder(Base):
    __tablename__ = "reminders"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False) 
    description = Column(Text, nullable=True)
    reminder_time = Column(DateTime, nullable=False) 
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False) 
    owner = relationship("User", back_populates="reminders")             
    