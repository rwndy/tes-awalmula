import React from 'react';
import { Navbar } from '../components';

const Home = ({data}) => {

  console.log(data)

  return (
    <main className='main'>
      <div className='container'>
        <div className='main-row'>
          {
            data.items && data?.items?.map((item) => (
              <div key={item?.id} className='cards'>
                <h4>
                  {item?.name}
                </h4>
                <p>Rp {item?.price}</p>
              </div>
            ))
          }
        </div>
        <Navbar />
      </div>
    </main>
  )
};

export async function getServerSideProps({res}) {
    const url = process.env.MAGENTO_URL

    res.setHeader('Cache-Control', revalidate(60))

    const response = await fetch(`${url}/products?searchCriteria[pageSize]=10`)
    const { items } = await response.json()

    return { 
      props: { 
        data: {
          items
        }
      } 
    }
}

const revalidate = second => {
  return `public, s-maxage=${second}, stale-while-revalidate=31560000`
}

export default Home;
