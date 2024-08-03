
import img from './img.png'
import './home.css'

export default function Home() {
  return (
    <div className='home p-28 '>
      <img src={img} alt="avatar female" />
      <h1 className=" fw-bold fs-1">start Framework</h1>
      <div className="style mt-3">
        <div className="dash bg-slate-900 w-36 mx-2"></div>
        <i className="fa-solid fa-star"></i>
        <div className="dash bg-slate-900 w-36 mx-2"></div>
      </div>
      <p className="pt-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
