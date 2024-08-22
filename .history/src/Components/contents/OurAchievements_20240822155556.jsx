import React from 'react'

const OurAchievements = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);
  console.log(data);

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);
  return (
    <section className="bg-black mb-8 py-8 lg:py-16">
          <div className="container m-auto">
            <div className="text-center pb-10">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-ge-dinar-medium pb-2">
                إنــجـــازاتـنــــا
              </h2>
              <img src="https://almajdiah.com/images/divid-bg.png" className="h-3 w-36 lg:h-4 lg:w-44 inline-block m-auto"
                alt="divid" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4 text-white text-center">
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/4kf65Z9fTnQsijmhK7MDjYf7lj2h7apWCmNOfVCR.png"
                  className="w-16 lg:w-24 m-auto" alt="متر مربع تم تطويره" /><span
                  className="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">2,000,000</span><span
                  className="block text-lg lg:text-xl">متر مربع تم تطويره</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/4ba55kXy8YXj6TbOnGvVcr0j9tc9bTvIEvo3Wm6o.png"
                  className="w-16 lg:w-24 m-auto" alt="سكان الموافقة ريزدنس" /><span
                  className="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">60,000+</span><span
                  className="block text-lg lg:text-xl">سكان الموافقة ريزدنس</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/KLr8OMvbwCIhzQhIA0lWQYBigfjTbDlOsHIlYrD8.png"
                  className="w-16 lg:w-24 m-auto" alt="مبنى تم إنشاؤه" /><span
                  className="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">1000+</span><span
                  className="block text-lg lg:text-xl">مبنى تم إنشاؤه</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/2Bgukif3susFKO2w8A6cUii0bsH76iyxaiuRYEdP.png"
                  className="w-16 lg:w-24 m-auto" alt="وحدة سكنية" /><span
                  className="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">15,000+</span><span
                  className="block text-lg lg:text-xl">وحدة سكنية</span>
              </div>
            </div>
          </div>
        </section>
  )
}

export default OurAchievements
