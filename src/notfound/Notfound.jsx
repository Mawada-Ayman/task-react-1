
import './notfound.css'

export default function Notfound() {
  return (
    <>
    { <div className="error-container py-52"> 
        <h1 className='h1-'> 404 </h1> 
        <p className='p-'> 
            Oops! The page youre 
            looking for is not here. 
        </p> 
        <a className='a-' href="/"> 
            Go Back to Home 
        </a> 
    </div>  }
    </>
  )
}
