import { connectDB } from '@/util/database'

export default async function Home() {
  
  let client = await connectDB;
  const db = client.db('CodingAppleSample');
  let result = await db.collection('post').find().toArray();

  return (
    <div>
      <main>
        안녕
        {/* {result[0]} */}
      </main>
    </div>
  )
}
