import { connectDB } from '@/util/database'
import Link from 'next/link';

export default async function list() {
    
    let client = await connectDB;
    const db = client.db('CodingAppleSample');
    let result = await db.collection('post').find().toArray();
    console.log(result)

    return (
        <div className="list-bg">
            {result.map((result, i) =>
                <div className="list-item" key={i}>
                    <Link href={"/detail/" + result._id}>
                        <h4>{result.title}</h4>
                    </Link>
                    <p>{result.content}</p>
                </div>
            )}
        </div>
    )
}
