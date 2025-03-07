from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Reminder
from ..schemas import ReminderSchema
from ..auth import get_current_user

router = APIRouter()

@router.post("/reminders", response_model=ReminderSchema)
async def create_reminder(reminder: ReminderSchema, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    db_reminder = Reminder(
        title=reminder.title,
        description=reminder.description,
        reminder_time=reminder.reminder_time,
        owner_id=current_user.id
    )
    db.add(db_reminder)
    db.commit()
    db.refresh(db_reminder)
    return db_reminder

@router.get("/reminders", response_model=list[ReminderSchema])
async def get_reminders(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return db.query(Reminder).filter(Reminder.owner_id == current_user.id).all()
