import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb';

export default async function handler(request, respond) {
    if(request.method === 'DELETE') {
        try {
            const db = (await connectDB).db('CodingAppleSample');
            let result = await db.collection('post').deleteOne(
                {_id : new ObjectId(request.body)}
            )
            return respond.json('삭제완료')
        }
        catch(error){
            return respond.status(500).json({message: 'error'})
        }
    }
}
