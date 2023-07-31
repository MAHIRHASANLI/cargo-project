const array = [
    {
        name: "Payment Done",
        about: "Pay with a Visa or PayPal card and without much ado",
        image: "https://d26lpennugtm8s.cloudfront.net/stores/081/721/rte/Add%20to%20Cart-pana.png",
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
        about: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/location-tracking-app-4475005-3714158.png",
        color:"#d9f99d"

    },
    {
        name: "Product Received",
        about: "In our you can see the delay ome of your order.",
        image: "https://png.pngtree.com/png-clipart/20220909/original/pngtree-flat-design-illustration-of-cash-on-delivery-transaction-with-goods-truck-png-image_8517625.png",
        color: "#fee2e2"
    }
];

const ServicesSection = () => {
    return (
        <section className='py-20'>
            <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto'>
                <div className='text-center'>
                    <h2 className='mb-4 text-[28px] font-[600] leading-none  tracking-tight text-gray-900 md:text-[40px] lg:text-[44px] dark:text-white' data-aos="fade-down" data-aos-delay="100">Home Services We Offer</h2>
                    <p className='text-[15px] font-normal text-gray-500 lg:text-[19px] md:text-[17px] dark:text-gray-400 lg:mt-10 mt-5 max-w-[585px] mx-auto' data-aos="fade-down" data-aos-delay="200"
                    >With our app you can view the your order, from our local headquarters to the place where you are. Look for the app now!</p>
                </div>
                <div className='py-20 grid grid-cols-1 gap-[50px] lg:grid-cols-2 mx-auto'>
                    {
                        array && array.map((item, ind) => {
                            return (
                                <div className='h-[350px] max-w-[450px] w-full flex justify-center items-center flex-col relative' data-aos="zoom-in" data-aos-offset="100" data-aos-delay="100" key={ind}>
                                    <div className='w-[80%] h-[90%] rounded-es-[40px] rounded-tr-[40px] rounded-br-[40px] rounded-tl-[50%] absolute  flex justify-center items-center flex-col z-[-3]' style={{background:`${item.color}`}}>
                                    </div>
                                    <div className="max-w-[200px]">
                                        <h3 className='text-[20px] font-normal leading-none text-gray-900 md:text-[22px] lg:text-[24px] dark:text-white lg:mb-5 mb-3'>{item.name}</h3>
                                        <p className='italic text-[15px] font-normal text-gray-500 lg:text-[16px] md:text-[13px] dark:text-gray-400 lg:mb-3 mb-2'>{item.about}</p>
                                        <a className='font-bold' href=''>Learn more &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className='max-w-[130px] md:max-w-[200px] max-h-[120px] md:max-h-[200px] absolute bottom-[30px] md:left-[-90px] left-[-20px]' data-aos="zoom-in-right" data-aos-delay="100">
                                        <img src={item.image} alt={item.name} />
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

export default ServicesSection
// style={{ border: "1px solid red" }}