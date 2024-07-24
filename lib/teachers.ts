import prisma from "~/lib/prisma";

export async function getTeachers() {
    const teachers = await prisma.teacher.findMany({
        include: {
            schedules: true,
            absentAdjustments: true,
            substituteAdjustments: true
        }
    })
    
    return teachers;
}

export async function getTeacherById(teacherId: number) {
    const teacher = await prisma.teacher.findFirst({
        where: {
            id: teacherId
        },
        include: {
            schedules: true,
            absentAdjustments: true,
            substituteAdjustments: true
        }
    });
    
    return teacher;
}

export async function getTeachersByName(name: string) {
    const teachers = await prisma.teacher.findMany({
        where: {
            name
        },
        include: {
            schedules: true,
            absentAdjustments: true,
            substituteAdjustments: true
        }
    });
    
    return teachers;
}

export async function getTeachersBySubject(subject: string) {
    const teachers = await prisma.teacher.findMany({
        where: {
            subject
        },
        include: {
            schedules: true,
            absentAdjustments: true,
            substituteAdjustments: true
        }
    });
    
    return teachers;
}

export async function createTeacher(name: string, subject: string) {
    const teacher = await prisma.teacher.create({
        data: {
            name,
            subject
        },
        include: {
            schedules: true,
            absentAdjustments: true,
            substituteAdjustments: true
        }
    });
    
    return teacher;
}

export async function updateTeacher(teacherId: number, name: string, subject: string) {
    const updatedTeacher = await prisma.teacher.update({
        where: {
            id: teacherId
        },
        data: {
            name,
            subject
        }
    });
    
    return updatedTeacher;
}

export async function deleteTeacher(teacherId: number) {
    const deletedTeacher = await prisma.teacher.delete({
        where: {
            id: teacherId
        }
    });

    return deletedTeacher;
}
