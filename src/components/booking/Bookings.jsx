import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        //fetch(`http://localhost:5000/bookings?email=${user?.email}`)
          //  .then(res => res.json())
          //  .then(data => setOrders(data))
          axios.get(`http://localhost:5000/bookings?email=${user?.email}`,{withCredentials:true})
          .then(res=>setOrders(res.data))
    }, [])

    const handleDelete = (id) =>{
        const processed = confirm('Are you sure Delete This item??')
        if (processed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount>0) {
                    const filterData = orders.filter(order=> order._id !==id)
                    setOrders(filterData)
                 alert('delete success')
                }
            }
             
                )
        }
        console.log(id);

    } 

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>date</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        orders.map(order => <tr key={order._id}>
                            <td onClick={()=>handleDelete(order._id)} className="btn btn-small bg-red-500 text-white hover:bg-red-600">X</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-bold">
                                            <h2>{order.service}</h2><br />
                                           
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {order.name}
                            </td>
                            <td> <p>{order.date}</p></td>
                            <td> <p>{order.price}</p></td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Bookings;