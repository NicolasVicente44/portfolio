import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000]  flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0d9f6adb-6c59-4ee6-a292-cde55b87e166" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#000000] text-gray-300'>Contact Me</p>
                <p className='text-gray-300 py-4'>Submit the form below or reach me by email - nicolas.a.vicente44@gmail.com</p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6]  p-2' name="message" id="" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 text-white hover:bg-white hover:border-black hover:text-black px-4 py-3 my-9 mx-auto flex items-center transition duration-300'>
                Lets Connect
            </button>
        </form>
    </div>
  );
}

export default Contact;
