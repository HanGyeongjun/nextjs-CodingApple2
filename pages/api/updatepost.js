import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb';

export default async function handler(request, respond) {
    if(request.method === 'POST') {
        if(!request.body.title || !request.body.content){
            return respond.status(400).json({message: 'title and content are required'})
        }
        try {
            const db = (await connectDB).db('CodingAppleSample');
            let result = await db.collection('post').updateOne(
                {_id : new ObjectId(request.body._id)}, 
                {$set : { title : request.body.title, content : request.body.content }}
            )
            return respond.redirect(302, '/list')
        }
        catch(error){
            return respond.status(500).json({message: 'error'})
        }
    }
}
