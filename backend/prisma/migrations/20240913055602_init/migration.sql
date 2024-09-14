-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "locationData" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NumberIncrement" (
    "id" TEXT NOT NULL,
    "userPerDay" INTEGER NOT NULL,
    "volumeProcessedPerHour" INTEGER NOT NULL,
    "UserWaitingPerMin" INTEGER NOT NULL,

    CONSTRAINT "NumberIncrement_pkey" PRIMARY KEY ("id")
);
