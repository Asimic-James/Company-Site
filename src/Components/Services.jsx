import React from 'react'
import { assets } from '../assets/assets'
import PageBanner from './PageBanner';

export default function Services() {

  return (
    <div>
        <PageBanner title="Services" />
        <div className="container mt-5 mb-5 text-center w-80 p-5 bg-light rounded shadow">
            <h1 className="text-center mb-4 font-roboto fw-bold">All Your Laptop Needs</h1>
            <hr className='w-50 mx-auto' />
            <ul className="row row-cols-1 row-cols-md-3 list-unstyled">
                {assets.map(({id, label, src, content}) => (
                    <li className="col col-md-4 font-roboto" key={id}>
                        <h4 className='text-center mb-3'>{label}</h4>
                        <img src={src} id={id} alt="asset" className="img-fluid rounded shadow" style={{ cursor: 'pointer'}} />
                        <p className='text-center mb-3 p-3'>{content}</p>
                    </li>
                ))}
            </ul>

        </div>
    </div>
  );
};



//export default function Services() {
// const [laptops, setLaptops] = useState([])


// async function LaptopList() {
//     const res = await fetch('https://api.example.com/laptops')
//     const data = await res.json()
//     setLaptops(data);
//     return data
//}
// useEffect(() => {
//     LaptopList()
// }, [])
//     
//}
//
// class LaptopList(Resource):  
//}

// const laptops = [
//     {'id': 1, 'brand': 'Dell', 'model': 'Inspiron'},
//     {'id': 2, 'brand': 'Apple', 'model': 'MacBook Pro'},
// ]

  

// api.add_resource(LaptopList, '/laptops')

// if __name__ == '__main__':
//     app.run(debug=True)
