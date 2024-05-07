// import React,{useEffect,useState} from 'react';
// import './statewise.css';
// const Statewise = () => {


//     const [data,setData]=useState([]);

//     const getData = async () => {
//         const res = await fetch('https://data.covid19india.org/data.jsonn'); 
//         const actualData=await res.json();
//         console.log(actualData.statewise);
//         setData(actualData.statewise);
//     }
//     useEffect(()=>{
//         getData();
//     },[]);


//     return (
//         <>
        

//         <div className="container-fluid mt-5">
//             <div className="main-heading">
//                     <h1 className="mb-5 text-center"><span className="font-weight-bold">India</span> Covid-19 Dashboard</h1>
//             </div>
//             <div className="table-responsive">
//             <table className="table table-hover">
//                 <thead className="thead-dark">
//                 <tr>
//                     <th>State</th>
//                     <th>Confirmed</th>
//                     <th>Deaths</th>
//                     <th>Active</th>
//                     <th>Updated</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     data.map((value,index)=>{
//                         return (
//                             <tr key={index}>
//                                 <td>{value.state}</td>
//                                 <td>{value.confirmed}</td>
//                                 <td>{value.recovered}</td>
//                                 <td>{value.active}</td>
//                                 <td>{value.lastupdatedtime}</td>
//                             </tr>
//                         )
//                     })
//                 }
                
//                 </tbody>
//             </table>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Statewise;



import React, { useEffect, useState } from 'react';
import './statewise.css';

const Statewise = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json'); // Corrected the URL
        const actualData = await res.json();
        setData(actualData.statewise);
    }

    useEffect(() => {
        getData();
    }, []);

    // Function to handle search query change
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    // Filter data based on search query
    const filteredData = data.filter((stateData) => {
        return stateData.state.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">India</span> Covid-19 Dashboard</h1>
                </div>
                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search state..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.state}</td>
                                        <td>{value.confirmed}</td>
                                        <td>{value.recovered}</td>
                                        <td>{value.active}</td>
                                        <td>{value.lastupdatedtime}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise;
