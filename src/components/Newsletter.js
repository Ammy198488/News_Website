import React from 'react'

const Newsletter = () => {
    return (
        <section>
            <div className='container bg-primary text-white mt-5 p-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <h1 className='lh-base text-start'>Sign Up for Our Newsletters</h1>
                    </div>
                    <div className='col-lg-6 pt-5'>
                        <p className='text-start fs-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam corrupti necessitatibus sunt! Suscipit veniam facilis in, molestiae ad impedit dignissimos?
                        </p>
                    </div>
                </div>
                <div className="mb-3 pt-5 row">
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputPassword" placeholder='input your email address here' />
                    </div>
                    <button type='button' className='btn btn-danger col-sm-2'>Scribe Now</button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
