type Time = Date;
interface Times {
  createdAt: Time;
  updatedAt: Time;
  deletedAt: Time | null;
}

export type { Time, Times };
