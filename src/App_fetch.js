import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Header from './pages/Header'

const App = () => {
    const [con, setCon] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(false)
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(res => res.json())
            .then(res => {
                setCon(res);
                setLoading(true)
            })//data.json 을 배열로 가져온다음(then) console에 찍어라
    }, [])

    return (
        <div>
            <div>
                {
                    loading ? <div>
                        {
                            con.map(it => {
                                return (
                                    <div key={it.id}>
                                        <Link to={"/list/" + it.id}>
                                            {it.name}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        <Routes>
                            <Route path='/list/:num' element={<Detail list={con} />} />
                        </Routes>
                    </div>
                        : <div>없네?</div>
                }
            </div>
            <Header />
        </div>
    )
}

export default App