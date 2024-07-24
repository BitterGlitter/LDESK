import prisma from "~/lib/prisma"
import { validateDay } from "~/lib/utils";

export async function getAdjustments() {
    const adjustments = await prisma.adjustment.findMany({
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustments;
}

export async function getAdjustmentById(adjustmentId: number) {
    const adjustment = await prisma.adjustment.findFirst({
        where: {
            id: adjustmentId
        },
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustment;
}

export async function getAdjustmentsByDay(day: number) {
    validateDay(day);

    const adjustments = await prisma.adjustment.findMany({
        where: {
            day
        },
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustments;
}

export async function getAdjustmentByLecture(lecture: string) {
    const adjustments = await prisma.adjustment.findMany({
        where: {
            lecture
        },
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustments;
}

export async function getAdjustmentBySession(session: string) {
    const adjustments = await prisma.adjustment.findMany({
        where: {
            session
        },
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustments;
}

export async function getAdjustmentsByAbsentTeacher(teacherId: number) {
    const adjustments = await prisma.adjustment.findMany({
        where: {
            absentTeacherId: teacherId
        },
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustments;
}


export async function getAdjustmentsBySubstituteTeacher(teacherId: number) {
    const adjustments = await prisma.adjustment.findMany({
        where: {
            substituteTeacherId: teacherId
        },
        include: {
            absentTeacher: true,
            substituteTeacher: true
        }
    });

    return adjustments;
}

export async function createAdjustment(day: number, lecture: string, session: string, absentTeacherId: number, substituteTeacherId: number) {
    const adjustment = await prisma.adjustment.create({
        data: {
            day,
            lecture,
            session,
            absentTeacherId,
            substituteTeacherId
        }
    });

    return adjustment;
}

export async function updateAdjustment(adjustmentId: number, day: number, lecture: string, session: string, absentTeacherId: number, substituteTeacherId: number) {
    const updatedAdjustment = await prisma.adjustment.update({
        where: {
            id: adjustmentId
        },
        data: {
            day,
            lecture,
            session,
            absentTeacherId,
            substituteTeacherId
        }
    });

    return updatedAdjustment;
}

export async function deleteAdjustment(adjustmentId: number) {
    const deletedAdjustment = await prisma.adjustment.delete({
        where: {
            id: adjustmentId
        }
    });

    return deletedAdjustment;
}
