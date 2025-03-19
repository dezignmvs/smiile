import React from "react";
import "@fontsource/anek-malayalam";
import Image from "next/image";
import { Paperclip } from 'lucide-react';

export default function SujokPage() {
    return (
        <main>
            <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="mx-auto sm:mx-0">
                        <div className='py-3 text-center lg:text-start'>
                            <button className='text-[#77530c] bg-[#f3ebce] hover:shadow-xl text-sm md:text-lg font-normal px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-[#77530c]'>Discover the Healing Power of Sujok Therapy  </button>
                        </div>
                        <div className="py-3 text-center lg:text-start">
                            <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple font-anek'>
                                സുജോക്ക് തെറാപ്പി <br /> Sujok therapy
                            </h1>
                        </div>
                        <div className='my-7 text-center lg:text-start'>
                            <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-[#f9d80c] text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#c48c14]'>
                                Book an Appoinment
                            </button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                        <Image src="/images/pages/01.jpg" alt="hero-image" width={800} height={642} />
                    </div>

                </div>
            </div>

            {/* Part-2 */}

            <div className='mx-auto max-w-7xl  sm:py-10 px-6 lg:px-1'>
                <div className="mx-auto sm:mx-0">
                    <div className=" text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-[#77530c] bg-[#f3ebce]'>
                            What is Sujok Therapy?
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <h1 className='text-2xl lg:text-40xl'>
                            Sujok Therapy is a non-invasive and drug free healing modality that seeks to restore balance to the body's energy system. It is based on the principle that the hands and feet contain miniature representations of the entire body, and by stimulating these corresponding points, we can activate the body's innate healing mechanisms.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Part-3 */}

            <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8 '>
                <div className="mx-auto sm:mx-0">
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-[#77530c] bg-[#f3ebce] '>
                            How Does Sujok Therapy Work?
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <h1 className='text-2xl lg:text-40xl'>
                            Our trained Sujok therapists use various techniques, including acupressure, massage, and stimulation of specific points using tools like seeds, crystals, or magnets.By doing so, we aim to unblock energy pathways, improve circulation, andenhance the overall well-being of our clients.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Part-4 */}

            <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8 '>
                <div className="mx-auto sm:mx-0">
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-[#77530c] bg-[#f3ebce] '>
                            What Conditions Can Sujok Therapy Address ?
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <h1 className='text-2xl lg:text-40xl'>
                            Sujok Therapy is known to be effective in managing a wide range of physical, emotional, and mental health conditions. Some common issues that Sujok Therapy can address include:
                        </h1>
                        <div className="pt-8   ">
                            <div className="flex gap-3">
                                <Paperclip className="text-[#77530c]" />
                                <h1 className='text-2xl lg:text-40xl font-bold'>
                                    Pain Management
                                </h1>
                            </div>

                            <h1 className='text-2xl lg:text-40xl font-normal pl-9'>
                                Alleviate pain and discomfort associated with various conditions, such as arthritis, back pain, and migraines.
                            </h1>
                        </div>

                        <div className="pt-8   ">
                            <div className="flex gap-3">
                                <Paperclip className="text-[#77530c]" />
                                <h1 className='text-2xl lg:text-40xl font-bold'>
                                    Stress Relief
                                </h1>
                            </div>

                            <h1 className='text-2xl lg:text-40xl font-normal pl-9'>
                                Promote relaxation and reduce stress by balancing the body's energy flow.
                            </h1>
                        </div>

                        <div className="pt-8   ">
                            <div className="flex gap-3">
                                <Paperclip className="text-[#77530c]" />
                                <h1 className='text-2xl lg:text-40xl font-bold'>
                                    Digestive Disorders:
                                </h1>
                            </div>

                            <h1 className='text-2xl lg:text-40xl font-normal pl-9'>
                            Address issues related to digestion and improve gastrointestinal health.
                            </h1>
                        </div>

                        <div className="pt-8   ">
                            <div className="flex gap-3">
                                <Paperclip className="text-[#77530c]"  />
                                <h1 className='text-2xl lg:text-40xl font-bold'>
                                Emotional Well-being:
                                </h1>
                            </div>

                            <h1 className='text-2xl lg:text-40xl font-normal pl-9'>
                            * Support mental health and address emotional imbalances by stimulating specific Sujok points.
                            </h1>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-[#e5be46] rounded-3xl bg-[#d49514] relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">WHO WE ARE</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Understand Your <br /> Potential <br /> Heal with Your <span className="text-[#edea0c]">Hands </span> </h4>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-[#9b6d0c] py-4 px-12 hover:bg-[#77530c] rounded-full">Book an Appoiment</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute girldoodle">
                            <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>


                </div>
            </div>
        </div>



        </main>
    );
}
