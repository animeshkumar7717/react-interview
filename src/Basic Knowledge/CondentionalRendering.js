import React from 'react'


const Loading = () => <div>Loading...</div>
const Main = () => <div>render when the condition is true, simply it is a if condition</div>
const CondentionalRendering = () => {
    const isLoading = true;
    // if (isLoading) {
    //     return (
    //         <Loading />
    //     )
    // }
    // return (
    //     <Main />
    // )

    /**OR */

    // return isLoading ? <Loading /> :  <Main />

    /**OR */

    return (
        <div>
            {isLoading && <Loading />}
            <Main />
        </div>
    )
}

export default CondentionalRendering;
