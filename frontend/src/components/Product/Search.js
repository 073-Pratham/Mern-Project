import React, { Fragment, useState } from 'react'
import './Search.css'
import MetaData from '../layout/MetaData';

const Search = ({history}) => {
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/products/${keyword}`);
        } else{
            history.push("/products");
        }
    };

    return (
        <Fragment>
            <MetaData title="Search --Ecommerce" />
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search for a product..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="search" />
            </form>
        </Fragment>
    )
}

export default Search
