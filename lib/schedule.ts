import prisma from "~/lib/prisma"
import { validateDay } from "~/lib/utils";

export async function getSchedules() {
    const schedules = await prisma.schedule.findMany({
        include: {
            teacher: true
        }
    });

    return schedules;
}

export async function getScheduleByTeacher(teacherId: number) {
    const schedule = await prisma.schedule.findFirst({
        where: {
            teacherId
        },
        include: {
            teacher: true
        }
    });

    return schedule;
}

export async function getSchedulesByDay(day: number) {
    validateDay(day);

    const schedules = await prisma.schedule.findMany({
        where: {
            day
        },
        include: {
            teacher: true
        }
    });

    return schedules;
}

export async function createSchedule(teacherId: number, day: number, lecture: string, session: string) {
    validateDay(day);

    const schedule = await prisma.schedule.create({
        data: {
            teacherId,
            day,
            lecture,
            session
        },
        include: {
            teacher: true
        }
    });

    return schedule;
}

export async function updateSchedule(scheduleId: number, day: number, lecture: string, session: string) {
    validateDay(day);

    const updatedSchedule = await prisma.schedule.update({
        where: {
            id: scheduleId
        },
        data: {
            day,
            lecture,
            session
        },
        include: {
            teacher: true
        }
    });

    return updatedSchedule;
}

export async function deleteSchedule(scheduleId: number) {
    const deletedSchedule = await prisma.schedule.delete({
        where: {
            id: scheduleId
        }
    });

    return deletedSchedule;
}