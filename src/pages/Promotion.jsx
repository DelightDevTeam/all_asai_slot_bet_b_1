import React from 'react'
import '../assets/css/promotion.css';
import p1 from '../assets/img/p1.gif'
import p2 from '../assets/img/p2.gif'
import NewsFeed from '../components/Layout/NewsFeed';
import HomeTabs from '../components/Layout/HomeTabs';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const PromotionPage = () => {
  const {data:promotions, loading} = useFetch(BASE_URL + '/promotion');
   console.log(promotions);
  return (
    <div className='py-3 px-3 px-sm-5'>
      <p className="mx-auto  text-center fs-4 fw-bolder   promotionHeader">
         Promotion
      </p>
      {
        loading && (
          <div className="text-center">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
          </div>

        )
      }
      <div className="row my-3 gap-5 gap-sm-0">
        {promotions?.map((item)=>{
          return <div className="col-sm-6">
              <p>{item.title}</p>
              <img className='promotionImg' src={item.img} />
          </div>
        })}
      </div>
      {/* <NewsFeed/> */}
    </div>
  )
}

export default PromotionPage