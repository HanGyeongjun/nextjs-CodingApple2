import { connectDB } from '@/util/database'
import { data } from 'autoprefixer';
import Link from 'next/link';

export default async function handler(request, respond){
    console.log(123)
    if (request.method === 'POST') {
        // writr codes that upload post to database
        let client = await connectDB;
        const db = client.db('CodingAppleSample');
        let result = await db.collection('post').insertOne(request.body);
        console.log(result)
    }
    return respond.status(200).json('처리완료')
}9