import dashboardImage from '../images/dashboard.png'

export default function CTA() {
    return (
        // px-10 = left padding
        <section className='px-10'> 
            <div className='bg-blue-600'>
                <div className='text-white'>
                    <h2 className='text-4xl font-bold'>
                        Start posting <br />
                        jobs today
                    </h2>
                    
                    {/* mt-4: margin top 4 mane heading er ektu niche dilam */}
                    <p className="mt-4">
                        Start posting jobs for only $10
                    </p>

                    <button className="bg-white text-indigo-600">
                        Sign Up for Free
                    </button>
                </div>

                {/* // dashboard image */}
                <div>
                    <img src={dashboardImage}
                    alt='dashboard' />
                </div>
                
            </div>
        </section>
    )
}