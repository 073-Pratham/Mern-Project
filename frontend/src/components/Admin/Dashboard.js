import React , { useEffect }  from 'react';
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { useSelector , useDispatch } from 'react-redux';
import { getAdminProducts } from '../../actions/productAction';
import { getAllOrders } from '../../actions/orderAction';
import { getAllUsers } from '../../actions/userAction';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Doughnut , Line } from "react-chartjs-2";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { orders } = useSelector(state => state.allOrders);
    const { users } = useSelector(state => state.allUsers);


    let outOfStock = 0;
    products && products.forEach((item)=>{
        if(item.Stock === 0)
        outOfStock+=1;
    });


    useEffect(() => {
        dispatch(getAdminProducts());

        dispatch(getAllOrders());

        dispatch(getAllUsers())
    }, [dispatch])


    const lineState = {
        labels: ["Initial Amount" , "Amount Earned"],
        datasets: [
            {
                label: "Total Amount",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197 , 72 , 49)"],
                data: [0,4000],
            }
        ],
    };

    const doughnutState = {
        labels: ["Out of Stock" , "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A684","#6800B4"],
                hoverBackgroundColor: ["#4B5000","#35014F"],
                data: [outOfStock,products.length-outOfStock],
            },
        ],
    }

    return (
        <div className='dashboard'>
            <Sidebar />

            <div className='dashboardContainer'>
                <Typography component="h1">Dashboard</Typography>

                 <div className='dashboardSummary'>
                    <div>
                        <p>
                            Total Amount <br /> $2000
                        </p>
                    </div>

                    <div className='dashboardSummaryBox2'>
                        <Link to="/admin/product">
                            <p>Product</p>
                            <p>{products && products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>{orders && orders.length}</p>
                        </Link>
                        <Link to="/admin/users">
                            <p>Users</p>
                            <p>{users && users.length}</p>
                        </Link>
                    </div>
                </div>

                <div className='lineChart'>
                    <Line data={lineState} />
                </div>

                <div className='doughnutChart'>
                    <Doughnut data={doughnutState} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
