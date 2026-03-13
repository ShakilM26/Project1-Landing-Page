import dashboardImage from '../images/dashboard.png'

export default function CTA() {
    return (
        // px-10 = left padding
        <section className='px-10 py-20'> 
            <div className='bg-indigo-600 rounded-lg flex items-center justify-between p-16'>
                
                {/* // CTA - left side */}
                <div className='text-white max-w-md'>
                    <h2 className='text-4xl font-bold leading-snug'>
                        Start posting <br />
                        jobs today
                    </h2>
                    
                    {/* mt-4: margin top 4 mane heading er ektu niche dilam */}
                    <p className="mt-4 opacity-90">
                        Start posting jobs for only $10
                    </p>

                    <button className="mt-6 bg-white text-indigo-600 ">
                        Sign Up for Free
                    </button>
                </div>

                {/* // CTA - dashboard image */}
                <div>
                    <img src={dashboardImage}
                    alt='dashboard'
                    className='h-[250px] w-[420px]' />
                </div>
                
            </div>
        </section>
    )
}