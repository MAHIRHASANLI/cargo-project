const array = [
    {
        name: "Payment Done",
        about: "Pay with a Visa or PayPal card and without much ado",
        image: "https://png.pngtree.com/png-clipart/20220131/original/pngtree-entrepreneurs-announce-hiring-employees-to-work-in-the-company-png-image_7259406.png",
        color: "#fef08a"
    },
    {
        name: "Find Your Product",
        about: "Wc offer sale of product through the Internet.",
        image: "https://png.pngtree.com/png-clipart/20220131/original/pngtree-entrepreneurs-announce-hiring-employees-to-work-in-the-company-png-image_7259406.png",
        color: "#e8c7c755"
    },
    {
        name: "Print Out",
        about: "Print out service gives you convenience if someday you need.",
        image: "https://png.pngtree.com/png-clipart/20220131/original/pngtree-entrepreneurs-announce-hiring-employees-to-work-in-the-company-png-image_7259406.png",
        color: "#d9f99d"

    },
    {
        name: "Product Received",
        about: "In our you can see the delay ome of your order.",
        image: "https://png.pngtree.com/png-clipart/20220131/original/pngtree-entrepreneurs-announce-hiring-employees-to-work-in-the-company-png-image_7259406.png",
        color: "#fee2e2"
    }
];

const ServicesSection = () => {
    return (
        <section className='pt-16'>
            <div className='lg:max-w-[80%] md:max-w-[80%] w-[90%] mx-auto'>
                <div className='text-center'>
                    <h2 className='mb-4 text-[28px] font-[600] leading-none  tracking-tight text-gray-900 md:text-[40px] lg:text-[44px] dark:text-white' data-aos="fade-down" data-aos-delay="100">Home Services We Offer</h2>
                    <p className='text-[15px] font-normal text-gray-500 lg:text-[19px] md:text-[17px] dark:text-gray-400 lg:mt-10 mt-5 max-w-[585px] mx-auto' data-aos="fade-down" data-aos-delay="200"
                    >With our app you can view the your order, from our local headquarters to the place where you are. Look for the app now!</p>
                </div>
                <div className='py-10 grid grid-cols-1 md:grid-cols-2 mx-auto p-auto'>
                    {
                        array && array.map((item, ind) => {
                            return (
                                <div className='min-h-[370px] lg:min-h-[300px] max-w-[430px] p-100px rounded-es-[40px] rounded-tr-[40px] rounded-br-[40px] rounded-tl-[50%] flex justify-start items-center flex-col lg:flex-row relative' data-aos="zoom-in" data-aos-offset="100" data-aos-delay="100" key={ind}>
                                    <div className='w-[80%] h-[80%] rounded-es-[40px] rounded-tr-[40px] rounded-br-[40px] rounded-tl-[50%] absolute right-0  z-[-2]' style={{ background: `${item.color}` }}>
                                    </div>
                                    <div className='max-w-[150px] lg:max-w-[200px] max-h-[150px] lg:max-h-[200px] ' data-aos="zoom-in" data-aos-offset="200" data-aos-delay="200">
                                        <img className='object-cover' src={item.image} alt={item.name} />
                                    </div>
                                    <div className="max-w-[220px] pl-8">
                                        <h3 className='text-[18px] font-normal leading-none text-gray-900 md:text-[22px] lg:text-[24px] dark:text-white lg:mb-5 mb-3'>{item.name}</h3>
                                        <p className='italic text-[14px] font-normal text-gray-500 lg:text-[15px] md:text-[13px] dark:text-gray-400 lg:mb-3 mb-2'>{item.about}</p>
                                        <a href='/' className='font-bold hover:gap-x-[10px] after:w-0 after:h-1 after:content-["] after:absolute relative after:bg-[red] after:z-10 hover:after:w-[100px] after:bottom-[-10px] after:left-0 flex items-center transition-all'>Learn more &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div >
        </section >
    )
}

export default ServicesSection;