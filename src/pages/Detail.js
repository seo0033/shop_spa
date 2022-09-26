import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const Detail = ({ list }) => {
    const { num } = useParams();
    // http://localhost:3000/shop_spa/list/1 <-번호가져오는역할

    const match = list.find(it => it.id === Number(num))
    //useParams에서 넘어올때 num이 string이라서 ===(X) ==(O) 형식맞춰줘야함

    const listyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        background: '#ddd',
        margin: '0 5px',
    }

    return (
        <>
            <img src={process.env.PUBLIC_URL + match.img} alt="" />
            <div>{match.name}</div>
            <div>{match.des.substring(0, 2)}</div>
            {/* substring문자열자르기 + javascript "sort,findall"찾아보기 */}
            <div>{match.price}원</div>
            <ul>
                {
                    match.color.map(color => <li style={{ ...listyle, background: color }}></li>)
                }
            </ul>
        </>
    )
}

export default Detail