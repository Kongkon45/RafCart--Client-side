import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className='w-2/3 mx-auto mb-20'>
            <h2 className='text-4xl mt-6 font-bold'>F.A.Q</h2>
            <p className='text-md font-semibold'>Can’t find the answer you’re looking for? We’ve shared some <br /> of your most frequently asked questions to help you out!</p>
            
            <div className='mt-10'>
                <h3 className='text-2xl font-semibold mt-6'>Shipping Information</h3>
                <Accordion type="single" collapsible className="w-full mt-4 mx-auto border-2 py-4 px-8 rounded-lg bg-[#f8f6f6]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How will my parcel be deliverd ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do I pay for delivery ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How will my parcel be deliverd ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How will my parcel be deliverd ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div>
                <h3 className='text-2xl font-semibold mt-6'>Orders And Returns</h3>
                <Accordion type="single" collapsible className="w-full mt-4 mx-auto border-2 py-4 px-8 rounded-lg bg-[#f8f6f6]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Tacking my order</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-2">
                        <AccordionTrigger>I haven&apos;t recived my order</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How can I return on item ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How will my parcel be deliverd ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div>
                <h3 className='text-2xl font-semibold mt-6'>Payments</h3>
                <Accordion type="single" collapsible className="w-full mt-4 mx-auto border-2 py-4 px-8 rounded-lg bg-[#f8f6f6]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What payment types can i use ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Can I pay by gift Card ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-3">
                        <AccordionTrigger>I can&lsquo;t make payment</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                    <hr className='border border-gray-600' />
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Has my payment gone though ?</AccordionTrigger>
                        <AccordionContent>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;