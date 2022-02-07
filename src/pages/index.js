import React from 'react';

const Home = ({data}) => {

  console.log(data)

  return (
    <main>
      <div className='container'>
        <h1>Ini Home</h1>
        {
          data.items && data?.items?.map((item) => (
            <div key={item?.id} className='cards'>
              <h4>
                {item?.name}
              </h4>
            </div>
          ))
        }
      </div>
    </main>
  )
};

export async function getServerSideProps({res}) {
    const url = process.env.MAGENTO_URL

    res.setHeader('Cache-Control', revalidate(60))

    const response = await fetch(`${url}/products?searchCriteria[pageSize]=10`)
    const { items } = await response.json()
    const dataProducts = JSON.parse(items)

    return { 
      props: { 
        data: {
          dataProducts
        }
      } 
    }
}

const revalidate = second => {
  return `public, s-maxage=${second}, stale-while-revalidate=31560000`
}

export default Home;
