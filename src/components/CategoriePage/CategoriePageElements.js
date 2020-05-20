import React, { useState, useEffect, useContext } from 'react';
import ProductElement from '../InAllPages/ProductElement';
import axios from 'axios';

function CategoriePageElements(props) {

    const [elements, setElements] = useState([]);
    const [limit, setLimit] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${props.axiosUrl}`)
            .then(res => {
                setElements(res.data);
                setLoading(false);
            });
    }, []);

    const onLoadMore = () => {
        setLimit(limit + 8);
    }

    return (
        <div>
            <div className="homeNewsThings">
                {loading === false ?

                    elements.slice(0, limit).map((element, index) => (
                        <ProductElement {...element} key={index} category={element.categoryTag} />
                    )) :
                    <div className="spinner-center">
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
            </div>
            <button className="btn btn-primary homeSeeMore" type="button" onClick={onLoadMore}>زيد شوف حاجات أخرى...</button>
        </div>
    )
}

export default CategoriePageElements;