import React from 'react'
import {useParams} from 'react-router-dom'

export default function MemberDetails() {
    /*const params = useParams();
    const memberId = params.memberId;*/

    // direkt alma işlemi
    const {memberId} = useParams();
  return (
    <div>MemberDetails for {memberId}</div>
  )
}
