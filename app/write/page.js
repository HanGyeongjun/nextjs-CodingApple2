export default function write() {
    return (
        <div className="p-20">
            <h4>글쓰기</h4>
            <form action="/api/uploadpost" method="post">
                <input type="text" name="title" placeholder="제목을 입력하세요"/>
                <input type="text" name="content" placeholder="내용을 입력하세요"></input>
                <button type="submit">글쓰기</button>
            </form>
        </div>
    )
}