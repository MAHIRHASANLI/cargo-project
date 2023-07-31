const BottomFooterSection = () => {
    const date = new Date().getFullYear();
    return (
        <section className="py-[30px] container mx-auto">
            <div className="lg:max-w-[80%] md:max-w-[90%] w-[90%] mx-auto flex justify-between items-center flex-col gap-y-[20px] lg:flex-row">
                <div className="text-center lg:text-start">
                    <p className="text-[14px] text-gray-500 dark:text-gray-400">©Product Texac {date} All right reserved</p>
                    <p className="text-[14px] text-gray-500 dark:text-gray-400">Company Registrotion Number: 09833888</p>
                </div>

                <div>
                    <i className="fa-solid fa-message text-[20px] p-[15px] rounded-[50%] text-[#A074E8] bg-gray-300 hover:scale-110 cursor-pointer transition-all"></i>
                </div>
            </div>
        </section>
    )
}

export default BottomFooterSection