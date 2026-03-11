import amd from '../images/amd.png'
import intel from '../images/intel.png'
import talkit from '../images/talkit.png'
import tesla from '../images/tesla.png'
import vodafone from '../images/vodafone.png'

const Companies = () => {
    return (
        <section className='px-10 bg-gray-40'>
            <p className='text-gray-500 mb-10'>
                Companies we helped grow
            </p>

            <div className='flex items-center justify-between opacity-60'>
                <img src={amd} alt='amd' className='h-6' />
                <img src={intel} alt='intel' className='h-6' />
                <img src={talkit} alt='talkit' className='h-6' />
                <img src={tesla} alt='tesla' className='h-6' />
                <img src={vodafone} alt='vodafone' className='h-6' />
            </div>
        </section>
    )
}

export default Companies;