import React from 'react';
import PageImage from './PageImage';
import PageInput from './PageInput';

function Page () {
    return (
        <div className='page'>
            <PageImage></PageImage>
            <PageInput></PageInput>
        </div>
    )
}

export default Page;