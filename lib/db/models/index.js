import { model, models } from "mongoose";

import {
  subscriptionSchema,
  userdetailsSchema,
  userinfoSchema,
} from "../schema";

const dataModels = {
  Subscription:
    models.Subscription || model("Subscription", subscriptionSchema),
  UserDetails: models.UserDetail || model("UserDetail", userdetailsSchema),
  UserInfo: models.UserInfo || model("UserInfo", userinfoSchema),
};

export const { Subscription, UserDetails, UserInfo } = dataModels;