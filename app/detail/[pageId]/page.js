import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb';
import Link from 'next/link';

export default async function detail(props) {

  let client = await connectDB;
  const db = client.db('CodingAppleSample');
  let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.pageId) });

    return (
        <div>
          <h4>상세페이지입니다</h4>
          <h4>{result.title}</h4>
          <p>{result.content}</p>
        </div>
      )
}