import { Subscriber } from "../models/Subscriber.js"
import { respond } from "../utils/response.js"

export const signupNewsletter = async(req,res) => {
    try{
        const {email} = req.body

        if(!email) {
            return respond(res,"email is not found",400,false)
        }

        const newSubscriber = await Subscriber.create({email})

        return respond(res,"subscribing is done successfully for newsletter",200,true,newSubscriber)
    }catch(error) {
        console.log(error)
        return respond(res,"something went wrong while signup for the newsletter",500,false)
    }
}