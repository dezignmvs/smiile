import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Hypno Therapy",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Good Hypno Therappy',
        link: 'Learn more'
    },
    {
        heading: "Smile Meditation",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Good Smile Meditation',
        link: 'Learn more'
    },
    {
        heading: "Mudra",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Origin Smile Mudra Healing.',
        link: 'Learn more'
    },{
        heading: "EFT",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Experience Emotional Freedom with EFT.',
        link: 'Learn more'
    },{
        heading: "Sujok Therapy",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Discover the Healing Power of Sujok Therapy',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>Services</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Services We Provide.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-10 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={250} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;