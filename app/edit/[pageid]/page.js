import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb';

export default async function Edit(props) {

    let client = await connectDB;
    const db = client.db('CodingAppleSample');
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.pageid)});

    return (
        <div className="p-20">
            <h4>글 수정하기</h4>
            <form action="/api/updatepost" method="POST">
                <input type="text" name="title" defaultValue={result.title}/>
                <input type="text" name="content" defaultValue={result.content}></input>
                <input type="text" name="_id" defaultValue={result._id} style={{display : 'none'}}></input>
                <button type="submit">수정 완료</button>
            </form>
        </div>
    )
}