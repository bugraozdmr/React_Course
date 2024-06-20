import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Members() {
    const [searchParams, setSearchParams] = useSearchParams()
    {/* ?filter=... şeklinde */}
    const isActive = searchParams.get('filter') === 'active';
  return (
    <div>
        <div>Members</div>
        <button onClick={
            () => {setSearchParams({filter:'active'})}
        }>Active Members</button>

        <button onClick={
            () => {setSearchParams()}
        }>All Members</button>
        {isActive ? <h2>Active Members</h2> : <h2>All Members</h2>}
    </div>
  )
}
