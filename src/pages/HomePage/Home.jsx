import HeroSection from "../../components/layout/HeroSection";
import CareCategories from "../../components/layout/CareCategories";
import BigSaleBanner from "../../components/layout/BigSaleBanner";
import SalesBanners from "../../components/layout/SalesBanners";
import BrandsSlider from "../../components/layout/BrandsSlider";
import EnayaFeatures from "../../components/layout/EnayaFeatures";
import ProductGrid from "../../components/layout/HomeSections/ProductGrid";
import TrendingNewArrivals from "../../components/layout/HomeSections/TrendingNewArrivals";
import DealsSection from "../../components/layout/HomeSections/DealsSection";
import ShopCollection from "../../components/layout/HomeSections/ShopCollection";
import AnimatedCategoriesSection from "../../components/layout/HomeSections/AnimatedCategoriesSection";

export default function Home() {
  return (
    <div className="HomePage">
      <HeroSection />
      <CareCategories />
      <DealsSection />
      <SalesBanners />
      <BigSaleBanner />
      <AnimatedCategoriesSection />
      <TrendingNewArrivals />
      <EnayaFeatures />
      <ShopCollection />
      <BrandsSlider />
    </div>
  );
}
