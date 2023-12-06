import { connectDB } from '@/util/database'
import Link from 'next/link';

export default async function handler(request, respond){
    console.log(123)
    if (request.method === 'POST') {
    }
    return respond.status(200).json('처리완료')
}9