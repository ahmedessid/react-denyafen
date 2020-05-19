import React from 'react'

export default function Loader() {
    return (
        <div className="spinner-center">
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
