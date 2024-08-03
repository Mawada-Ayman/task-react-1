
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className='py-5'>
    <h1 className="fw-bold fs-1 text-center">conatct section</h1>
    <div className="style mt-3">
        <div className="dash bg-slate-900 w-36 mx-2"></div>
        <i className="fa-solid fa-star"></i>
        <div className="dash bg-slate-900 w-36 mx-2"></div>
      </div>
    <form className='w-1/2 mx-auto'>
      <input type="text" placeholder='userName' className='border-b w-11/12 border-b-2 p-2 my-3 focus:outline-none' />
      <input type='text' placeholder='userAge' className='border-b w-11/12 border-b-2 p-2 my-3 focus:outline-none' />
      <input type='email' placeholder='userEmail' className='border-b w-11/12 border-b-2 p-2 my-3 focus:outline-none' />
      <input type='password' placeholder='userPassword' className='border-b w-11/12 border-b-2 p-2 my-3 focus:outline-none' />
      <div>
      <Button type="submit" variant="outline-dark">send Message</Button>
      </div>
    </form>
    </div>
  )
}
