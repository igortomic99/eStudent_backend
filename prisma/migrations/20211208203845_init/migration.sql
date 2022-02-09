-- CreateEnum
CREATE TYPE "SubjectType" AS ENUM ('REQUIRED', 'ELECTIVE');

-- CreateTable
CREATE TABLE "Grade" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "examID" TEXT NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modul" (
    "id" TEXT NOT NULL,
    "moduleName" TEXT NOT NULL,

    CONSTRAINT "Modul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "jmbg" TEXT NOT NULL,
    "brind" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "examID" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "subjectId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "passed" BOOLEAN NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,
    "espp" INTEGER NOT NULL,
    "professorID" TEXT NOT NULL,
    "examID" TEXT NOT NULL,
    "type" "SubjectType" NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grade_examID_key" ON "Grade"("examID");

-- CreateIndex
CREATE UNIQUE INDEX "Modul_moduleName_key" ON "Modul"("moduleName");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_jmbg_key" ON "Student"("jmbg");

-- CreateIndex
CREATE UNIQUE INDEX "Student_brind_key" ON "Student"("brind");

-- CreateIndex
CREATE UNIQUE INDEX "Student_examID_key" ON "Student"("examID");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subjectName_key" ON "Subject"("subjectName");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_professorID_key" ON "Subject"("professorID");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_examID_key" ON "Subject"("examID");

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_examID_fkey" FOREIGN KEY ("examID") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_professorID_fkey" FOREIGN KEY ("professorID") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
