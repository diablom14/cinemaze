import { Inngest } from "inngest";
import User from "../models/users.model.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Inngest function to store created user in database
const syncUserCreation = inngest.createFunction(
    {id:"sync-create-user-clerk"},
    {event: "clerk/user.created"},
    async ({event})=>{
        const {id, first_name, last_name, email, image} = event.data;
        const userData = {
            _id:id,
            name:first_name+" "+last_name,
            email:email,
            image:image_url
        }

        await User.create(userData)
    }
)

// Inngest function to delete deleted user from database
const syncUserDeletion = inngest.createFunction(
    {id:"sync-user-delete-clerk"},
    {event:"clerk/user.deleted"},
    async ({event})=>{
        const {id} = event.data
        await User.findByIdAndDelete(id)    
    }
)

// Inngest function to update user data in database
const syncUserUpdation = inngest.createFunction(
    {id:"sync-update-user-clerk"},
    {event: "clerk/user.updated"},
    async ({event})=>{
        const {id, first_name, last_name, email, image} = event.data;
        const userData = {
            _id:id,
            name:first_name+" "+last_name,
            email:email,
            image:image_url
        }

        await User.findByIdAndUpdate(id, userData)
    }
)

export const functions = [
    syncUserCreation, 
    syncUserDeletion,
    syncUserUpdation
];