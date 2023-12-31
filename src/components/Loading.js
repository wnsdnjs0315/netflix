import React from 'react'
import { Grid } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='loading'>
            <Grid
                height="80"
                width="80"
                color="#a90c0c"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading