
import Hero from '../../components/Hero/Hero';

import Contact from '../../components/Contact/Contact';
import Prix from '../../components/Prix/Prix';
import AboutDeux from '../../components/AboutDeux/AboutDeux';

import { Container } from 'react-bootstrap';
import Cards from '../../components/MethodesCards/Cards';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


const HomePage = () => {
  const { i18n } = useTranslation('global');
    const [language, setLanguage] = useState(i18n.language);
    const [data,setData] = useState([]);
    const [articles,setArticles] = useState([]);
  
    const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      setLanguage(lang)
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    // const fetchMenu = async () => {
    //   const response = await fetch('/items/menus?fields=*,*.*.* filter:`{"tag":{"_eq":"${tag}"}}',{
    //     headers: { Authorization: 'Bearer lSEDTtfWDOtvaRgkPHOnPWn0lfnHFwHU' },
    //   });
    //   const { data } = await response.json();
    //   setMenus(data);
    //   console.log(data)
    // };
    const fetchData = async () => {
      const backofficePath = `items/menus`;
      let qparams = new URLSearchParams({
        ...( { fields: "*.*.*.*.*.*.*" }),
      }).toString();
    
     
        qparams = `${qparams}&filter={"label":{"_eq":"home"}}`;
    
      
    try {
      const response = await fetch(`${backofficePath}?${qparams}`, {
        headers: {
          Authorization: `Bearer lSEDTtfWDOtvaRgkPHOnPWn0lfnHFwHU`,
        },
      });
      const {data} = await response.json();
      if (data) {
      const {menus_categories}=data[0];
      console.log(menus_categories)
      const {categories_id} = menus_categories[0];
      const {categories_articles} = categories_id
      const articles = categories_articles.map(({articles_id})=> articles_id)
      setData(data[0])

     
     setArticles(articles)
    }
    } catch (error) {
      console.log({error});
        return {data: {}}
    }
    };
    
  return (
    <div className="full-width">
      
      <Hero />
    {articles.map((article)=>( <AboutDeux data={article} key={article.id} language={language} className='about-deux' /> ))}
    
     <Container className="my-5"></Container> 

     <Cards className='cards' />

     <Prix className='prix' />

   <Contact className='contact' />
    
 
 
   </div>
  );
};

export default HomePage;
