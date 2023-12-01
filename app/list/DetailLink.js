'use client'

import { useRouter } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    return (
        <div>
            <button onClick={ ()=>{ router.push('/list')} } >상세페이지로 이동</button>
        </div>
    )
}