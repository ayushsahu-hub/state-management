import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

// action for adding task to the bucket
export const addToBucket = createAction(
    '[Bucket] Add',
    props<Bucket>()
)


// action for removing task from the bucket
export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<Partial<Bucket>>()
)
