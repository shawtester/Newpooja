
import { getCategories } from "@/lib/firestore/categories/read_server";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Temp from "./components/Temp";
import Number from "./components/Number";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Review from "./components/Review"


export default async function Home() {
  const categories = await getCategories();
  return (
    
            <main>
            <Header/>
            <Slider/>
            <Categories categories={categories}/>
            <Temp/>
            <Number/>
            <Testimonial/>
            <Review/>
            <Footer/>
           
            
            </main>
       
  );
}
