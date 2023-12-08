'use client'
import Link from 'next/link'

export default function ListItem({result}) {
    
    return (
        <div>
            {result.map((result, i) =>
                <div className="list-item" key={i}>
                    <Link href={"/detail/" + result._id}>
                        <h4>{result.title}</h4>
                    </Link>
                    <p>{result.content}</p>
                    <Link href={"/edit/" + result._id}>수정하기✏️</Link>
                    <span onClick={() => {
                        fetch("/api/deletepost", {
                            method: "DELETE",
                            body: result._id
                        })
                        .then((res) => {
                            console.log('deleted')
                            res.json()
                        })
                        .then((data) => {
                            console.log(data)
                        })                       
                    }}>삭제하기🗑️</span>
                </div>
            )}
        </div>
    )
}