import { connectDB } from '@/util/database'
import ListItem from './ListItem';

export const dynamic = 'force-dynamic'

export default async function list() {
    
    let client = await connectDB;
    const db = client.db('CodingAppleSample');
    let result = await db.collection('post').find().toArray();
    console.log(result)

    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
}
