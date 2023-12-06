import { connectDB } from '@/util/database'

export default async function handler(request, respond){

    let client = await connectDB;
    const db = client.db('CodingAppleSample');
    let result = await db.collection('post').find().toArray();

    return respond.json(result)
}